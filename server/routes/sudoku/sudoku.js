import express from "express";
import { query } from "../../db/util";

const sudokuRouter = express.Router();
sudokuRouter.use(express.json());

sudokuRouter.get("/:difficulty", (req, res) => {
    const difficulty = parseInt(req.params.difficulty);
    if (isNaN(difficulty)) res.status(404).json({
        error: "Difficulty is invalid."
    });
    query(`
        SELECT *
        FROM problem
        WHERE difficulty = ${difficulty}
        ORDER BY random()
        LIMIT 1;
    `).then(results => {
        const problem = results[0].grid;
        res.status(200).json({
            problem
        });
    }).catch(err => {
        res.status(404).json({
            error: err.message
        });
    });

});

export default sudokuRouter;
