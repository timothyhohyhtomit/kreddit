import React from "react";

import "./RootHeaderView.css";

function RootHeaderView({ handleClickCreatePost }) {
    return (
        <div className="root-header">
            <div className="root-header-logo">Kreddit</div>
            <div className="root-header-search-bar"></div>
            <div className="root-header-buttons">
                <div className="root-header-create-post-button" onClick={handleClickCreatePost}>
                    <svg rpl="" fill="currentColor" height="20" icon-name="add-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                    </svg>
                    &nbsp;Create
                </div>
                <div className="root-header-account">Acc</div>
            </div>
        </div>
    );
}

export default RootHeaderView;
