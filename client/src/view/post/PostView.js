import React from "react";

import PostAddCommentView from "./comment/PostAddCommentView";

function PostView({ authorProfilePictureUrl, authorUsername, likeCount, title, content, newComment, setNewComment, handlePostAddCommentClickSubmit, addCommentInputRef }) {
    return (
        <div className="post">
            <div className="post-header">
                <img className="post-author-profile-picture" src={authorProfilePictureUrl} />
                <div className="post-author">{authorUsername}</div>
            </div>
            <div className="post-title">{title}</div>
            <div className="post-content">{content}</div>
            <div className="post-image"></div>
            <div className="post-reaction-buttons">
                <div className="post-likes">
                    <div className="post-upvote"></div>
                    <div className="post-like-count">{likeCount}</div>
                    <div className="post-downvote"></div>
                </div>
                <div className="post-comment-count"></div>
                <div className="post-share"></div>
                <div className="post-save"></div>
            </div>
            <PostAddCommentView
                newComment={newComment}
                setNewComment={setNewComment}
                handleClickSubmit={handlePostAddCommentClickSubmit}
                addCommentInputRef={addCommentInputRef}
            />
        </div>
    );
}

export default PostView;
