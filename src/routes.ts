import { Context, Next } from "koa";
import { IRoute } from "./types";

export const BaseRoutes: IRoute[] = [
    {
        path: "/",
        method: "get",
        action: (ctx: Context, next: Next) => (ctx.body = { status: 0 }),
    },
    {
        path: "/hello",
        method: "get",
        action: (ctx: Context, next: Next) =>
            (ctx.body = { a: ctx.request.query }),
    },
    {
        path: "/hello",
        method: "post",
        action: (ctx: Context, next: Next) => (ctx.body = ctx.request.body),
    },
];
