export class Connector {
    public connection: any;
    private mysql;

    // public result: any;

    constructor() {
        this.mysql = require('mysql');
        this.initConnection();
    }

    private initConnection() {
        this.connection = this.mysql.createConnection({
            host: 'localhost',
            port: 3333,
            user: 'root',
            password: 'example',
            database: 'demo'
        });
        this.connection.connect();
    }
}
