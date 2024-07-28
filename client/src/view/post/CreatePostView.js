import React from "react";

function CreatePostView({ selectedTab, setSelectedTab, title, setTitle, content, setContent, handleCreatePostSubmit }) {
    return (
        <>
            <CreatePostHeaderView />
            <CreatePostSelectTabsView />
            <CreatePostBodyView />
        </>
    );
}

export default CreatePostView;