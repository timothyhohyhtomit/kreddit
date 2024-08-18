import React from "react";

import Dropdown from "../../../container/general/dropdown/Dropdown";
import "./SudokuMenuView.css";

function SudokuMenuView({ difficulties, handleClickLoadSudoku, isContributeHidden, setContributeHidden, contributeDifficulty, setContributeDifficulty, contribute, setContribute, contributeErrors, handleClickSubmitSudoku }) {
    return (
        <div className="sudoku-menu">
            <div className="sudoku-load">
                <div className="sudoku-load-title">Load a puzzle: </div>
                <div className="sudoku-load-buttons">
                    { difficulties.map((difficulty, i) => <button className="sudoku-load-button" onClick={(e) => handleClickLoadSudoku(i)}>{difficulty}</button>) }
                </div>
            </div>
            <div className="sudoku-contribute">
                <div className="sudoku-contribute-header">
                    <div className="sudoku-contribute-title">Contribute a puzzle: </div>
                    <button className="sudoku-contribute-collapse" onClick={(e) => setContributeHidden(!isContributeHidden)}>{isContributeHidden ? "Show" : "Hide"}</button>
                </div>
                { isContributeHidden ? null :
                    <div className="sudoku-contribute-body">
                        <Dropdown
                            text="Select difficulty"
                            options={difficulties}
                            selected={contributeDifficulty}
                            setSelected={setContributeDifficulty}
                        />
                        <div className="sudoku-contribute-input">
                            <input type="text" maxLength="81" size="81" value={contribute} onChange={(e) => setContribute(e.currentTarget.value)} />
                        </div>
                        <div className="sudoku-contribute-errors">
                            <ul className="sudoku-contribute-errors-list">
                                { contributeErrors && contributeErrors.map((error) => (
                                    <li className="sudoku-contribute-errors-item">{error}</li>
                                ))}
                            </ul>
                        </div>
                        <input className="sudoku-contribute-submit" type="submit" onClick={(e) => handleClickSubmitSudoku(0, contribute)} />
                    </div>
                }
            </div>
        </div>
    );
}

export default SudokuMenuView;
