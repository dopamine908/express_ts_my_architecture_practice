import {BaseRouter} from "./base.router";
import {TodoController} from "../Controller/todo.controller";

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

        // this.router.post('/demo_body_parse', express.json(), (req, res, next) => {
        //     res.send(JSON.stringify(req.body));
        // });
    }


}
