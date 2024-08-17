import React from "react";

import "./StopwatchView.css";

function StopwatchView({ text, seconds, isActive, isPaused, handleStart, handleReset, handlePause, handleResume }) {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor(seconds / 60) % 60;
    const second = seconds % 60;
    return (
        <div className="stopwatch">
            <div className="stopwatch-text">{text}</div>
            <div className="stopwatch-time">{(hour < 10 ? "0" : "") + hour}:{(minute < 10 ? "0" : "") + minute}:{(second < 10 ? "0" : "") + second}</div>
            <div className="stopwatch-pause-resume">
                { isActive ? (
                    isPaused ? 
                    <button onClick={handleResume}>Resume</button> :
                    <button onClick={handlePause}>Pause</button>
                ) : null}
            </div>
            <div className="stopwatch-start-reset">
                { isActive ? 
                    <button onClick={handleReset}>Reset</button> : 
                    <button onClick={handleStart}>Start</button>
                }
            </div>
        </div>
    );
}

export default StopwatchView;