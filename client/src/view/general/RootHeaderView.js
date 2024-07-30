import React from "react";

import "./RootHeaderView.css";

function RootHeaderView() {
    return (
        <div className="root-header">
            <div className="root-header-logo">Kreddit</div>
            <div className="root-header-search-bar"></div>
            <div className="root-header-buttons">
                <div className="root-header-create-post-button">
                    <span className="root-header-create-post-button-symbol">+</span>
                    &nbsp;Create
                </div>
                <div className="root-header-account">Acc</div>
            </div>
        </div>
    );
}

export default RootHeaderView;
