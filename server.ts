import "https://deno.land/x/denv/mod.ts";
import { Application } from "./deps.ts";
import router from "./router.ts";
import { APP_NAME, APP_HOST, APP_PORT, EXPORT } from "./config/env.ts";
import errorMiddleware from "./middleware/error.ts";
// 初始化
const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`🦕 ${APP_NAME} running at http://${APP_HOST}:${EXPORT}/ 🦕`);

await app.listen({ port: Number(APP_PORT) });
