import Koa from "koa";
import KoaLogger from "koa-logger";
import KoaRouter from "koa-router";
import KoaBodyparser from "koa-bodyparser";
import KoaJson from "koa-json";

import { BaseRoutes } from "./routes";

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
