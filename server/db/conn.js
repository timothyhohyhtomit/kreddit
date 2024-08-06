import pg from "pg";
const { Pool } = pg;

import { DB_HOST_URL, DB_HOST_PORT, DB_NAME, DB_USER, DB_PASSWORD } from "../configuration.js";

const pool = new Pool({
    host: DB_HOST_URL,
    port: DB_HOST_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});

export default pool;
