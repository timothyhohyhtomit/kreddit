import React from "react";

import { TAB_ENUM } from "../../app/constant";
import CreatePostHeaderView from "./CreatePostHeaderView";
import CreatePostSelectTabsView from "./CreatePostSelectTabsView";
import CreatePostTextBodyView from "./CreatePostTextBodyView";

function CreatePostView({ selectedTab, setSelectedTab, title, setTitle, content, setContent, handleCreatePostSubmit }) {
    return (
        <>
            <CreatePostHeaderView />
            <CreatePostSelectTabsView
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            { selectedTab === TAB_ENUM.text && 
                <CreatePostTextBodyView
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                />
            }
        </>
    );
}

export default CreatePostView;