import Koa from "koa";
import Router from "koa-router";
import { Db } from "mongodb";

export const setupApp = (db: Db) => {
  const app = new Koa();

  const router = new Router();

  router.prefix("");

  router.get("/users", ctx => {
    ctx.status = 200;
    ctx.body = {
      message: "ok",
      ok: true
    };
  });

  app.use(router.routes()).use(router.allowedMethods());

  return app;
};