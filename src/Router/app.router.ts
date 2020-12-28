import {BaseRouter} from "./base.router";
import {TodoRouter} from "./todo.router";

export class AppRouter extends BaseRouter {
    constructor() {
        super();
    }

    protected registorRouter(): void {
        this.router.use('/todo', (new TodoRouter()).router);
    }
}
