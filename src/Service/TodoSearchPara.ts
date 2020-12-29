import {Request} from "express";

export class TodoSearchPara {
    public id: any;
    public name: any;
    public status: any;

    constructor(request: Request) {
        this.id = this.setId(request);
        this.name = this.setName(request);
        this.status = this.setStatus(request);
    }

    public haveIdParameter(): boolean {
        return this.id;
    }

    public haveNameParameter(): boolean {
        return this.name;
    }

    public haveStatusParameter(): boolean {
        return this.status;
    }

    private setId(request: Request): any {
        if (typeof request.query.id == 'undefined' || request.query.id == '') {
            return null;
        } else {
            return request.query.id;
        }

    }

    private setName(request: Request): any {
        if (typeof request.query.name == 'undefined' || request.query.name == '') {
            return null;
        } else {
            return request.query.name;
        }
    }

    private setStatus(request: Request): any {
        if (typeof request.query.status == 'undefined' || request.query.status == '') {
            return null;
        } else {
            return request.query.status;
        }
    }
}
