import { Tedis } from "tedis";
import * as dotenv from "dotenv";
const redisPort: string = process.env.REDIS_PORT || "6379";
const db = new Tedis({
    host: process.env.REDIS_HOST,
    port: parseInt(redisPort),
    password: process.env.REDIS_PWD,
});

export { db };