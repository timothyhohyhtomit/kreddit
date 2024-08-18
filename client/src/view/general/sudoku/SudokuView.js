import React from "react";

import "./SudokuView.css";
import Stopwatch from "../../../container/general/stopwatch/Stopwatch";

function SudokuView({ difficulty, grid, handleChangeCell }) {
    return (
        <div className="sudoku">
            <div className="sudoku-header">
                <h1>Sudoku</h1>
                <div className="sudoku-difficulty">Difficulty: {difficulty}</div>
                <Stopwatch />
            </div>
            <div className="sudoku-body">
                <div className="sudoku-grid">
                    { Array(9).fill(0).map((x, i) => (
                        <div className="sudoku-row">
                            { Array(9).fill(0).map((y, j) => (
                                <div className="sudoku-cell">
                                    <input className="sudoku-cell-input" type="text" value={grid[9 * i + j]} onChange={(e) => handleChangeCell(i, j, e.currentTarget.value)} size="1" maxLength="1" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SudokuView;