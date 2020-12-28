import {BaseRouter} from "./base.router";

export class TodoRouter extends BaseRouter {
    constructor() {
        super();
    }

    protected registorRouter(): void {
        this.router.get('/', (req, res, next) => {
            res.send('Todo, Hello, World!!');
        });
    }


}
