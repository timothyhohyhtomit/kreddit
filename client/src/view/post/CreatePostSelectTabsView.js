import React from "react";

function CreatePostSelectTabsView({ selectedTab, setSelectedTab }) {
    return (
        <div className="post-create-tabs">
            <div className="post-create-tab" onClick={(e) => setSelectedTab(1)}>Text</div>
            <div className="post-create-tab" onClick={(e) => setSelectedTab(2)}>Images</div>
        </div>
    );
}

export default CreatePostSelectTabsView;
