import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";

const database = drizzle(process.env.DATABASE_URL!);

export { database };
