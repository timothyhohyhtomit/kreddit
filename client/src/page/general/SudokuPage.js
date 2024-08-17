import React, { useState } from "react";
import { SERVER_URL } from "../../app/configuration";
import SudokuView from "../../view/general/sudoku/SudokuView";
import GenerateSudokuView from "../../view/general/sudoku/GenerateSudokuView";

function SudokuPage() {
    const DIFFICULTY = {
        EASY: 0,
        MEDIUM: 1,
        HARD: 2,
        EXPERT: 3
    };
    const DIFFICULTY_TEXT = ["Easy", "Medium", "Hard", "Expert"];
    const [problem, setProblem] = useState(Array(81));
    const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY);
    const [grid, setGrid] = useState(Array(81).fill(0));
    // handlers
    const handleClickGenerateSudoku = (difficulty) => {
        fetch(SERVER_URL + "/sudoku/" + difficulty)
        .then(response => response.json())
        .then(jsonData => {
            if (jsonData.error) throw new Error(jsonData.error);
            const row = jsonData.problem;
            setProblem(row.grid.split(""));
            setGrid(row.grid.split(""));
            setDifficulty(row.difficulty);
        }).catch(err => {
            alert("Unable to generate a sudoku: " + err.message);
        });
    };
    const handleChangeCell = (i, j, val) => {
        setGrid((prev) => {
            const nextGrid = [...prev];
            nextGrid[i * 9 + j] = val;
            return nextGrid;
        });
    };
    return (
        <>
        { (problem && problem.length == 81) ?
            <SudokuView
                difficulty={difficulty}
                grid={grid}
                handleChangeCell={handleChangeCell}
            /> : <GenerateSudokuView />
        }
        </>
    );
}

export default SudokuPage;