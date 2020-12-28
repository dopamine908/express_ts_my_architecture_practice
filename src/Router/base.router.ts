import {Router} from "express";

export abstract class BaseRouter {
    public router = Router();

    constructor() {
        this.initRouter();
    }

    protected abstract registorRouter(): void

    private initRouter() {
        this.registorRouter();
    }
}
