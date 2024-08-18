import React, { useState } from "react";
import { SERVER_URL } from "../../app/configuration";
import SudokuView from "../../view/general/sudoku/SudokuView";
import SudokuMenuView from "../../view/general/sudoku/SudokuMenuView";

function SudokuPage() {
    const DIFFICULTY = {
        EASY: 0,
        MEDIUM: 1,
        HARD: 2,
        EXPERT: 3
    };
    const DIFFICULTY_TEXT = ["Easy", "Medium", "Hard", "Expert"];
    const [problem, setProblem] = useState(null);
    const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY);
    const [grid, setGrid] = useState(Array(81).fill(0));
    const [isContributeHidden, setContributeHidden] = useState(true);
    const [contributeDifficulty, setContributeDifficulty] = useState(null);
    const [contribute, setContribute] = useState("");
    // handlers
    const handleClickLoadSudoku = (difficulty) => {
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
    const handleClickSubmitSudoku = (difficulty, problem) => {};
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
            /> : 
            <SudokuMenuView
                difficulties={DIFFICULTY_TEXT}
                handleClickLoadSudoku={handleClickLoadSudoku}
                isContributeHidden={isContributeHidden}
                setContributeHidden={setContributeHidden}
                contributeDifficulty={contributeDifficulty}
                setContributeDifficulty={setContributeDifficulty}
                contribute={contribute}
                setContribute={setContribute}
                handleClickSubmitSudoku={handleClickSubmitSudoku}
            />
        }
        </>
    );
}

export default SudokuPage;