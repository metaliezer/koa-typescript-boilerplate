import "module-alias/register";
import Koa from "koa";
import KoaLogger from "koa-logger";
import KoaRouter from "koa-router";
import KoaBodyparser from "koa-bodyparser";
import KoaJson from "koa-json";
import { BaseRoutes } from "./routes";
import { MysqlConnection } from "./infrastructure/orm/typeorm/typeorm";

Promise.all([MysqlConnection]).then(() => {
    const router = new KoaRouter();
    const app = new Koa();

    app.use(KoaJson());
    app.use(KoaBodyparser());
    app.use(KoaLogger());
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(3000);
    BaseRoutes.forEach((route) => {
        router[route.method](route.path, route.action);
    });
    app.on("error", (err) => {
        console.error("server error", err);
    });
    app.use(async function pageNotFound(ctx) {
        ctx.status = 404;

        switch (ctx.accepts("html", "json")) {
            case "html":
                ctx.type = "html";
                ctx.body = "<p>Page Not Found</p>";
                break;
            case "json":
                ctx.body = {
                    message: "Page Not Found",
                };
                break;
            default:
                ctx.type = "text";
                ctx.body = "Page Not Found";
        }
    });
});
