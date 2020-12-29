import {NextFunction, Request, Response} from "express";
import {Connector} from "../Model/Connector";

export class TodoController {

    async getTodos(request: Request, response: Response, next: NextFunction) {
        const mysql = new Connector();

        mysql.connection.query('SELECT * FROM `todo`', (err: any, rows: any, fields: any) => {
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

    deleteTodo(request: Request, response: Response, next: NextFunction) {
        const sql_prepare = `DELETE FROM todo WHERE id=?`;
        const binding = request.params.id;

        const mysql = new Connector();
        mysql.connection.query(sql_prepare, binding, (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
        mysql.connection.end();
    }
}
