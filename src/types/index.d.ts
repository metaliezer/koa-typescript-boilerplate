import { Context, Next } from "koa";
export interface IRoute {
    path: string;
    method: "get" | "post" | "delete" | "put";
    action(ctx: Context, next: Next): Promise<void> | void;
}
