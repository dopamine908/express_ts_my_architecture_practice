import {BaseRouter} from "./base.router";
import {TodoController} from "../Controller/todo.controller";
import express from "express";

export class TodoRouter extends BaseRouter {
    private controller: TodoController;

    constructor() {
        super();
        this.controller = new TodoController();
    }

    protected registorRouter(): void {
        this.router.get('/', (req, res, next) => {
            this.controller.getTodos(req, res, next);
        });

        //create
        this.router.post('/', express.json(), (req, res, next) => {
            this.controller.addTodo(req, res, next);
        });

        //delete
        this.router.delete('/:id', (req, res, next) => {
            this.controller.deleteTodo(req, res, next);
        });
    }


}
