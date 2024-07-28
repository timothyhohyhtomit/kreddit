import React from "react";

import { TAB_ENUM } from "../../app/constant";
import CreatePostTextBodyView from "./CreatePostTextBodyView";

function CreatePostView({ selectedTab, setSelectedTab, title, setTitle, content, setContent, handleCreatePostSubmit }) {
    return (
        <>
            <CreatePostHeaderView />
            <CreatePostSelectTabsView />
            { selectedTab === TAB_ENUM.text && 
                <CreatePostTextBodyView />
            }
        </>
    );
}

export default CreatePostView;