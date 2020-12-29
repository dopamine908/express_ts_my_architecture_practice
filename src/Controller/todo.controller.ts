import {NextFunction, Request, Response} from "express";
import {Connector} from "../Model/Connector";

export class TodoController {

    async getTodos(request: Request, response: Response, next: NextFunction) {
        const mysql = new Connector();

        mysql.connection.query('SELECT * FROM `todo`', (err: any, rows: any, fields: any) => {
            if (err) throw err;
            response.send(rows);
        });
    }
}
