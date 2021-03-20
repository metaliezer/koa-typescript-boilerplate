import { Connection, createConnections } from "typeorm";
import { BookModel } from "./models/book";
import { UserModel } from "./models/user";

export const MysqlConnection: Promise<void | Connection[]> = createConnections([
    {
        name: "default",
        type: "mariadb",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "library",
        synchronize: true,
        logging: false,
        entities: [BookModel, UserModel],
    },
]).then(
    (conn) => {
        return conn;
    },
    (error) => {
        const er = error as Error;
        throw new Error(er.message);
    }
);
