import React from "react";

import "./CreatePostTitleView.css";
import { post } from "../../../app/constant";

function CreatePostTitleView({ title, setTitle, titleTextareaRef, handleTitleInputChange, handleTitleInputBlur }) {
    return (
        <>
            <h2>Title</h2>
            <div className="post-create-text-body-title-container">
                <textarea ref={titleTextareaRef} className="post-create-text-body-title" maxLength={post.create.title.MAX_LENGTH} onChange={handleTitleInputChange} onBlur={handleTitleInputBlur} required>{title}</textarea>
            </div>
            <div className="post-create-text-body-title-char-count">{title.length}/{post.create.title.MAX_LENGTH}</div>
        </>
    );
}

export default CreatePostTitleView;