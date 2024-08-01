import React from "react";

import "./CreatePostSelectTabsView.css";
import CreatePostTabView from "./CreatePostTabView";
import { post } from "../../app/constant";

function CreatePostSelectTabsView({ selectedTab, setSelectedTab }) {
    return (
        <div className="post-create-tabs">
            <CreatePostTabView
                text="Text"
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabEnum={post.create.tab.TAB_ENUM.text}
            />
            <CreatePostTabView
                text="Images"
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabEnum={post.create.tab.TAB_ENUM.images}
            />
        </div>
    );
}

export default CreatePostSelectTabsView;
