import dotenv from "dotenv";
import path from "path";
import express from "express";
import {AppRouter} from "./Router/app.router";
import cors from "cors";

export class App {

    private app = express();
    private router = new AppRouter();

    constructor() {
        this.initEnv();
        this.initCors();
        this.initRouter();
    }

    public bootstrap() {
        this.app.listen(process.env.PORT, () => console.log(`http server is running at port ${process.env.PORT}.`));
    }

    private initEnv() {
        dotenv.config({path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`)});
    }

    private initRouter() {
        this.app.use('/', this.router.router);
    }

    private initCors() {
        this.app.use(cors());
    }
}
