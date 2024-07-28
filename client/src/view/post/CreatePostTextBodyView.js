import React from "react";

function CreatePostTextBodyView({ title, setTitle, content, setContent }) {
    return (
        <div className="post-create-text-body">
            <h2>Title</h2>
            <div className="post-create-text-body-title">
                <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </div>
            <h2>Content</h2>
            <div className="post-create-text-content">
                <input value={content} onChange={(e) => setContent(e.currentTarget.value)} />
            </div>
        </div>
    );
}

export default CreatePostTextBodyView;