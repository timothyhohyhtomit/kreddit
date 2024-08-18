import React, { useEffect, useState } from "react";
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
    const [contributeErrors, setContributeErrors] = useState([]);
    // effects
    useEffect(() => {
        setGrid(problem);
    }, [problem]);
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
    const handleClickSubmitSudoku = (difficulty, problem) => {
        setContributeErrors([]);
        const errors = [];
        // verify difficulty is valid
        if (difficulty < DIFFICULTY.EASY || difficulty > DIFFICULTY.EXPERT) {
            errors.push("Difficulty level is out of range.");
        }
        // convert all 'x' and 'X' to '0'
        problem = problem.replaceAll('x', '0').replaceAll('X', '0');
        // verify problem is valid
        // check for wrong length
        if (typeof problem !== "string" && !(problem instanceof String)) {
            errors.push("Puzzle must be of string type.");
            setContributeErrors(errors);
            return;
        } else if (problem.length !== 81) {
            errors.push("Puzzle must be of length 81, but has " + problem.length);
            setContributeErrors(errors);
            return;
        }
        // check for non-digit characters
        for (let i = 0; i < problem.length; i++) {
            const c = problem.charCodeAt(i);
            if (c < 48 || c > 57) {
                errors.push("Puzzle contains character(s) other than digits.");
                setContributeErrors(errors);
                return;
            }
        }
        // check for duplicate values in each row
        for (let i = 0; i < 9; i++) {
            const set = Set();
            for (let j = 0; j < 9; j++) {
                const c = problem.charCodeAt(i * 9 + j);
                if (c === 48) continue;  // '0'
                else if (set.has(c)) {
                    errors.push(`Row ${i} contains duplicate values`);
                    break;
                } else {
                    set.add(c);
                }
            }
        }
        // check for duplicate values in each column
        for (let j = 0; j < 9; j++) {
            const set = Set();
            for (let i = 0; i < 9; i++) {
                const c = problem.charCodeAt(i * 9 + j);
                if (c === 48) continue;  // '0'
                else if (set.has(c)) {
                    errors.push(`Column ${j} contains duplicate values`);
                    break;
                } else {
                    set.add(c);
                }
            }
        }
        // check for duplicate values in each subsquare
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                const set = Set();
                for (let p = 0; p < 3; p++) {
                    for (let q = 0; q < 3; q++) {
                        const c = problem.charCodeAt((i + p) * 9 + j + q);
                        if (c === 48) continue;  // '0'
                        else if (set.has(c)) {
                            errors.push(`Subsquare ${i + j / 3} contains duplicate values.`);
                            break;
                        } else {
                            set.add(c);
                        }
                    }
                }
            }
        }
        // if no errors, send a request to server, otherwise display errors and terminate
        if (errors && errors.length > 0) {
            setContributeErrors(errors);
            return;
        }
        fetch(SERVER_URL + "/sudoku/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                difficulty,
                problem
            })
        }).then(response => {
            if (response.status === 201) {
                setProblem(problem.split(""));
            } else {
                setContributeErrors(["Server error."]);
            }
            return response.json();
        }).catch(err => {
            setContributeErrors(["Server error: " + err.message]);
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
                contributeErrors={contributeErrors}
                handleClickSubmitSudoku={handleClickSubmitSudoku}
            />
        }
        </>
    );
}

export default SudokuPage;