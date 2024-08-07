import React from "react";

import "./CreatePostErrorView.css";

/*
CreatePostErrorView renders any errors when creating a new post.
Arguments:
- error: an array of strings
*/
function CreatePostErrorView({ errors }) {
    return (
        <div className="post-create-errors">
            <h3>Please fix the following before submitting your post:</h3>
            <ul className="post-create-errors-list">
                { errors.map((error) => <li className="post-create-errors-item">{error}</li>)}
            </ul>
        </div>
    );
}

export default CreatePostErrorView;