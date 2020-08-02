import "https://deno.land/x/denv/mod.ts";
import { Application } from "./deps.ts";
import router from "./router.ts";
import errorMiddleware from "./middlewares/error.ts";

const APP_NAME = Deno.env.get("APP_NAME") || "oak";
const APP_HOST = Deno.env.get("APP_HOST") || "127.0.0.1";

// 初始化
const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`🦕 ${APP_NAME} running at http://${APP_HOST}:1998/ 🦕`);

await app.listen({ port: 1998 });
