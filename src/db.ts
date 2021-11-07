import { Tedis } from "tedis";
import * as dotenv from "dotenv";
dotenv.config();
const redisPort: string = process.env.REDIS_PORT || "6379";
const db = new Tedis({
    host: process.env.REDIS_HOST,
    port: parseInt(redisPort),
    password: process.env.REDIS_PWD,
});

db.on("connect", () => {
    console.log("DB connected");
  });
  db.on("timeout", () => {
    console.log("DB timedout");
  });
  db.on("error", (err: Error) => {
    console.log(`DB error: ${err}`);
  });

export { db };