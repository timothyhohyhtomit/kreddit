import pool from "./conn.js";

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

/*
sanitiseString() escapes all single quotes in a string by replacing them with two single quotes, so that there is no issue inserting it to a database.
Arguments:
- str: a string to be sanitised
Returns:
- A string with all single quotes replaced by two single quotes, and trimmed.
*/
export const sanitiseString = (str) => {
    return str.replaceAll("'", "''").trim();
};