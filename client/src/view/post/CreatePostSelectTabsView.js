import React from "react";

function CreatePostSelectTabsView({ selectedTab, setSelectedTab }) {
    return (
        <div className="post-create-tabs">
            <div className="post-create-tab">Text</div>
            <div className="post-create-tab">Images</div>
        </div>
    );
}

export default CreatePostSelectTabsView;
