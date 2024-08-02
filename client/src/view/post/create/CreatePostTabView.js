import React from "react";

import "./CreatePostTabView.css";

function CreatePostTabView({ text, selectedTab, setSelectedTab, tabEnum }) {
    return (
        <div className="post-create-tab" onClick={(e) => setSelectedTab(tabEnum)}>
            <div className="post-create-tab-text">{text}</div>
            <div className={"post-create-tab-underline" + (selectedTab === tabEnum ? " visible" : "")}></div>
        </div>
    );
}

export default CreatePostTabView;