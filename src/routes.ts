import { Context, Next } from "koa";
import { BookController } from "./interfaces/controllers/book-controller";
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
];
