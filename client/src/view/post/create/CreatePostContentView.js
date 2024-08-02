import React from "react";

import "./CreatePostContentView.css";
import { post } from "../../../app/constant";

function CreatePostContentView({ content, setContent, contentTextareaRef, handleContentInputChange, handleContentInputBlur }) {
    return (
        <>
            <h2>Content</h2>
            <div className="post-create-text-body-content-container">
                <textarea ref={contentTextareaRef} className="post-create-text-body-content" maxLength={post.create.content.MAX_LENGTH} onChange={handleContentInputChange} onBlur={handleContentInputBlur} required>{content}</textarea>
            </div>
            <div className="post-create-text-body-content-char-count">{content.length}/{post.create.content.MAX_LENGTH}</div>
        </>
    );
}

export default CreatePostContentView;