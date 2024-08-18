import React, { useState } from "react";

import "./Dropdown.css";

function Dropdown({ text, options, selected, setSelected }) {
    const [isMenuHidden, setMenuHidden] = useState(true);
    const [shownText, setShownText] = useState(text);
    const handleClickOption = (e, i) => {
        setSelected(i);
        setShownText(e.currentTarget.value);
        setMenuHidden(true);
    };
    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={(e) => setMenuHidden(!isMenuHidden)}>{shownText}</button>
            { isMenuHidden ? null : (
                <ul className="dropdown-menu">
                    { options.map((option, i) => (
                        <li className="dropdown-menu-item">
                            <input type="button" onClick={(e) => handleClickOption(e, i)} value={option} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
