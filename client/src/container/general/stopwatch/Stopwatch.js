import React, { useEffect, useState } from "react";

import StopwatchView from "../../../view/general/stopwatch/StopwatchView";

function Stopwatch() {
    // STATES
    const [seconds, setSeconds] = useState(0);
    const [isActive, setActive] = useState(false);
    const [isPaused, setPaused] = useState(false);
    // HANDLERS
    const handleStart = (e) => {
        setActive(true);
        setPaused(false);
    };
    const handleReset = (e) => {
        setActive(false);
        setPaused(false);
        setSeconds(0);
    };
    const handlePause = (e) => {
        setPaused(true);
    };
    const handleResume = (e) => {
        setPaused(false);
    };
    // EFFECTS
    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused]);
    return (
        <StopwatchView
            text="Time: "
            seconds={seconds}
            isActive={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handleReset={handleReset}
            handlePause={handlePause}
            handleResume={handleResume}
        />
    );
}

export default Stopwatch;