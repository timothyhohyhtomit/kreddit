import React from "react";

import "./CreatePostContentView.css";
import { post } from "../../app/constant";

function CreatePostContentView({ content, setContent, handleContentInputBlur }) {
    return (
        <>
            <h2>Content</h2>
            <div className="post-create-text-body-content-container">
                <textarea className="post-create-text-body-content" maxLength={post.create.content.MAX_LENGTH} onChange={(e) => setContent(e.currentTarget.value)} onBlur={handleContentInputBlur} required>{content}</textarea>
            </div>
            <div className="post-create-text-body-content-char-count">{content.length}/{post.create.content.MAX_LENGTH}</div>
        </>
    );
}

export default CreatePostContentView;