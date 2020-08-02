const env = Deno.env.toObject();
export const DB_HOST_URL = env.DB_HOST_URL || "mongodb://localhost:27017";
export const DB_NAME = "juejin";
export const APP_NAME = env.APP_NAME || "juejin";
export const APP_PORT = env.APP_PORT || 1994;
export const EXPORT = env.APP_HOST || 1998;
export const APP_HOST = env.APP_HOST || "127.0.0.1";
