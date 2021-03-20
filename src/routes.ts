import { Context, Next } from "koa";
import { BookController } from "./interfaces/controllers/book";
import { UserController } from "./interfaces/controllers/user";
import { IRoute } from "./types";

export const BaseRoutes: IRoute[] = [
    {
        path: "/",
        method: "get",
        action: (ctx: Context, next: Next) => {
            ctx.body = { status: 0 };
        },
    },
    {
        path: "/book/:id",
        method: "get",
        action: new BookController().findBook,
    },
    {
        path: "/book/:id",
        method: "delete",
        action: new BookController().removeBook,
    },
    {
        path: "/book",
        method: "post",
        action: new BookController().addBook,
    },
    {
        path: "/book",
        method: "put",
        action: new BookController().updateBook,
    },
    {
        path: "/user/:id",
        method: "get",
        action: new UserController().findUser,
    },
    {
        path: "/user/:id",
        method: "delete",
        action: new UserController().removeUser,
    },
    {
        path: "/user",
        method: "post",
        action: new UserController().addUser,
    },
    {
        path: "/user",
        method: "put",
        action: new UserController().updateUser,
    },
];
