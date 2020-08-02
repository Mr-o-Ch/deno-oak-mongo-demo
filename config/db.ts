import { MongoClient } from "../deps.ts";
import { DB_HOST_URL, DB_NAME } from "./env.ts";

// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri(DB_HOST_URL);
// 连接数据库
const db = client.database(DB_NAME);
export default db;
