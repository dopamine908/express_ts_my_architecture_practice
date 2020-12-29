import {NextFunction, Request, Response} from "express";
import {Connector} from "../Model/Connector";
import {TodoSearchPara} from "../Service/TodoSearchPara";
import {TodoSearchQueryBuilder} from "../Service/TodoSearchQueryBuilder";

export class TodoController {

    async getTodos(request: Request, response: Response, next: NextFunction) {

        const para = new TodoSearchPara(request);
        const query_builder = new TodoSearchQueryBuilder();
        query_builder.initQuery(para);

        const mysql = new Connector();

        mysql.connection.query(query_builder.sql_prepare, query_builder.sql_binding, (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
        mysql.connection.end();

    }

    //create
    async addTodo(request: Request, response: Response, next: NextFunction) {
        const sql_prepare = `INSERT INTO todo (name,status) VALUES(?,?)`;
        const binding = [request.body.name, request.body.status];

        const mysql = new Connector();
        mysql.connection.query(sql_prepare, binding, (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
        mysql.connection.end();
    }

    async deleteTodo(request: Request, response: Response, next: NextFunction) {
        const sql_prepare = `DELETE FROM todo WHERE id=?`;
        const binding = request.params.id;

        const mysql = new Connector();
        mysql.connection.query(sql_prepare, binding, (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
        mysql.connection.end();
    }

    async updateTodo(request: Request, response: Response, next: NextFunction) {
        const sql_prepare = `UPDATE todo SET name=? , status=? WHERE id=?`;
        const binding = [request.body.name, request.body.status, request.params.id];

        const mysql = new Connector();
        mysql.connection.query(sql_prepare, binding, (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
        mysql.connection.end();
    }
}
