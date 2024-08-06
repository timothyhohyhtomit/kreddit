import pool from "./conn";

/*
query() queries the database whose specifictions are given by pool with query.
Arguments:
- pool: a Pool instance given by Postgres pg module
- command: a PostgreSQL query as a string
Returns:
- A promise that resolves to query result as an array of records; Each record is an object.
*/

export const query = async (command) => {
    const db = await pool.connect();
    const result = await db.query(command);
    db.release();
    return result.rows;
};

export const querySync = (command) => {
    return query(pool, command)
    .catch(err => {
        throw new Error(err);
    });
};