import {NextFunction, Request, Response} from "express";

export class TodoController {

    async getTodos(request: Request, response: Response, next: NextFunction) {
        response.send('here');
    }
}
