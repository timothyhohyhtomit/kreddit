import express from "express";
import { query } from "../../db/util";
import { validateDifficulty } from "./sudokuUtil";

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

sudokuRouter.post("/create", (req, res) => {
    const { difficulty, problem } = req.body;
    try {
        validateDifficulty(difficulty);
        validateProblem(problem);
    } catch (err) {
        res.status(500).json({
            error: "Could not create a new sudoku puzzle: " + err.message
        });
    }
    query(`
        INSERT INTO (difficulty, grid)
        VALUES (${difficulty}, '${problem}')
        RETURNING id
    `).then(result => result[0].id)
    .catch(err => {
        console.log("POST /create: " + err.message);
        throw new Error(err);
    });
})

export default sudokuRouter;
