import React from "react";
import CreatePostTitleView from "./CreatePostTitleView";

import "./CreatePostTextBodyView.css";
import CreatePostContentView from "./CreatePostContentView";

function CreatePostTextBodyView({ title, setTitle, content, setContent, handleTitleInputBlur, handleContentInputBlur }) {
    return (
        <div className="post-create-text-body">
            <CreatePostTitleView
                title={title}
                setTitle={setTitle}
                handleTitleInputBlur={handleTitleInputBlur}
            />
            <CreatePostContentView
                content={content}
                setContent={setContent}
                handleContentInputBlur={handleContentInputBlur}
            />
        </div>
    );
}

export default CreatePostTextBodyView;