import React from "react";

import { TAB_ENUM } from "../../../app/constant";
import CreatePostHeaderView from "./CreatePostHeaderView";
import CreatePostSelectTabsView from "./CreatePostSelectTabsView";
import CreatePostTextBodyView from "./CreatePostTextBodyView";
import CreatePostErrorView from "./CreatePostErrorView";
import CreatePostButtonsView from "./CreatePostButtonsView";

import "./CreatePostView.css";

function CreatePostView({ selectedTab, setSelectedTab, title, setTitle, titleTextareaRef, content, setContent, errors, contentTextareaRef, handleTitleInputChange, handleTitleInputBlur, handleContentInputChange, handleContentInputBlur, handleCreatePostSubmit }) {
    return (
        <div className="post-create">
            <CreatePostHeaderView />
            <CreatePostSelectTabsView
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            { selectedTab === TAB_ENUM.text && 
                <CreatePostTextBodyView
                    title={title}
                    setTitle={setTitle}
                    titleTextareaRef={titleTextareaRef}
                    content={content}
                    setContent={setContent}
                    contentTextareaRef={contentTextareaRef}
                    handleTitleInputChange={handleTitleInputChange}handleTitleInputBlur={handleTitleInputBlur}
                    handleContentInputChange={handleContentInputChange}
                    handleContentInputBlur={handleContentInputBlur}
                />
            }
            { errors && errors.length > 0 &&
                <CreatePostErrorView
                    errors={errors}
                />
            }
            <CreatePostButtonsView
                handleCreatePostSubmit={handleCreatePostSubmit}
            />
        </div>
    );
}

export default CreatePostView;