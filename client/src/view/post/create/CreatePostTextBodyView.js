import React from "react";
import CreatePostTitleView from "./CreatePostTitleView";

import "./CreatePostTextBodyView.css";
import CreatePostContentView from "./CreatePostContentView";

function CreatePostTextBodyView({ title, setTitle, titleTextareaRef, content, setContent, contentTextareaRef, handleTitleInputChange, handleTitleInputBlur, handleContentInputChange, handleContentInputBlur }) {
    return (
        <div className="post-create-text-body">
            <CreatePostTitleView
                title={title}
                setTitle={setTitle}
                titleTextareaRef={titleTextareaRef}
                handleTitleInputChange={handleTitleInputChange}
                handleTitleInputBlur={handleTitleInputBlur}
            />
            <CreatePostContentView
                content={content}
                setContent={setContent}
                contentTextareaRef={contentTextareaRef}
                handleContentInputChange={handleContentInputChange}
                handleContentInputBlur={handleContentInputBlur}
            />
        </div>
    );
}

export default CreatePostTextBodyView;