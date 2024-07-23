import React from "react";

import "./PostAddCommentView.css";

function PostAddCommentView({ newComment, setNewComment, handleClickSubmit, addCommentInputRef }) {
    return (
        <div className="post-add-comment">
            <div className="post-add-comment-content">
                <input ref={addCommentInputRef} className="post-add-comment-content-input" type="text" placeholder="Add a comment" onChange={(e) => setNewComment(e.currentTarget.value)} onKeyUp={(e) => (e.key === "Enter" ? handleClickSubmit(e) : null)} value={newComment} />
            </div>
            <div className={"post-add-comment-submit " + (newComment.length > 0 ? "visible" : "invisible")} onClick={handleClickSubmit}>Comment</div>
        </div>
    );
}

export default PostAddCommentView;
