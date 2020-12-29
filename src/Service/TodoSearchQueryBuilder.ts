import {TodoSearchPara} from "./TodoSearchPara";

export class TodoSearchQueryBuilder {
    public sql_prepare: string = '';
    public sql_binding: string[] = [];
    private search_columns: any[] = [];
    private binding_values: any[] = [];

    public initQuery(todo_search_para: TodoSearchPara) {
        this.setIdCondition(todo_search_para);
        this.setNameCondition(todo_search_para);
        this.setStatusCondition(todo_search_para);
        this.generateQuery();
    }

    private generateQuery() {
        this.sql_prepare = this.generateSqlPrepare();
        this.generateSqlBinding();
    }

    private generateSqlPrepare(): string {
        let sql_prepare = 'SELECT * FROM `todo` ';
        if (this.search_columns.length == 0) {
            return sql_prepare;
        }
        this.search_columns.forEach((search_column, index) => {
            if (index == 0) {
                sql_prepare += 'WHERE ' + search_column + '=?';
            } else {
                sql_prepare += ' AND ' + search_column + '=?';
            }
        });
        return sql_prepare;
    }

    private generateSqlBinding() {
        if (this.search_columns.length !== 0) {
            this.binding_values.forEach(binding_value => {
                this.sql_binding.push(binding_value);
            })
        }
    }

    private setIdCondition(todo_search_para: TodoSearchPara) {
        if (todo_search_para.haveIdParameter()) {
            this.search_columns.push('id');
            this.binding_values.push(todo_search_para.id);
        }
    }

    private setNameCondition(todo_search_para: TodoSearchPara) {
        if (todo_search_para.haveNameParameter()) {
            this.search_columns.push('name');
            this.binding_values.push(todo_search_para.name);
        }
    }

    private setStatusCondition(todo_search_para: TodoSearchPara) {
        if (todo_search_para.haveStatusParameter()) {
            this.search_columns.push('status');
            this.binding_values.push(todo_search_para.status);
        }
    }
}
