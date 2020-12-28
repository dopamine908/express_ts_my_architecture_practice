import {BaseRouter} from "./base.router";

export class TodoRouter extends BaseRouter {
    constructor() {
        super();
    }

    protected registorRouter(): void {
        this.router.get('/', (req, res, next) => {
            res.send('Todo, Hello, World!!');
        });

        // this.router.post('/demo_body_parse', express.json(), (req, res, next) => {
        //     res.send(JSON.stringify(req.body));
        // });
    }


}
