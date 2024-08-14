import React, { useState, useEffect } from "react";

import Plot from "react-plotly.js";

function Sandbox() {
    
    const [xLimLow, setXLimLow] = useState(-100);
    const [xLimHigh, setXLimHigh] = useState(100);
    const [yLimLow, setYLimLow] = useState(-100);
    const [yLimHigh, setYLimHigh] = useState(100);
    const [step, setStep] = useState(0.1);
    const [xx, setXX] = useState([]);
    const [y, setY] = useState([]);
    const [equation, setEquation] = useState("");
    const range = (start, end, step) => {
        const size = (end - start) / step + 1;
        return [...Array(size).keys()].map(i => start + i * step);
    };
    useEffect(() => {
        setXX(range(xLimLow, xLimHigh, step));
    }, [xLimLow, xLimHigh, step, setXX]);
    
    return (
        <>
            <input type="text" value={equation} onChange={(e) => setEquation(e.currentTarget.value)} />
            <button onClick={(e) => setY(xx.map(x => eval(equation)))}>Submit</button>
            <Plot
                data={[
                {
                    x: xx,
                    y: y,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                }
                ]}
                layout={ {width: '50%', height: '50%', title: 'A Fancy Plot'} }
            />
        </>
    );
}

export default Sandbox;