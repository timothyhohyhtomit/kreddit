import React from "react";

import "./ButtonMain.css";

/*
ButtonMain renders a button with the main theme.
Arguments:
- text: string, shown on the button
- handler: event handler, triggered when the button is clicked
*/
function ButtonMain({ text, handler }) {
    return (
        <button className="button-main" onClick={handler}>{text}</button>
    );
}

export default ButtonMain;
