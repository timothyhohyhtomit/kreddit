import React from "react";

import "./PostCommentView.css";

function PostCommentView({ comment }) {
    return (
        <div className="post-comment">
            {/* header: avatar username • publishTime */}
            <div className="post-comment-header">
                {/* avatar */}
                <div className="post-comment-avatar">
                    <img src={comment.authorAvatarUrl} alt={`${comment.authorUsername}'s avatar`} />
                </div>
                {/* username */}
                <Link className="post-comment-author-link" reloadDocument to={`/user/${comment.authorId}`}>{comment.authorUserName}</Link>
                {/* publishTime */}
                <div className="post-comment-publish-date" title={comment.publishDate ? timestampToDateText(comment.publishDate) : ""}>{comment.ageMin ? comment.getDate() : ""}</div>
            </div>
            {/* content */}
            <div className="post-comment-content">{comment.content}</div>
            {/* footer: upvote likeCount downvote replyButton menu */}
            <div className="post-comment-footer">
                <div className="post-comment-upvote"></div>
                <div className="post-comment-like-count">{comment.likeCount}</div>
                <div className="post-comment-downvote"></div>
                <div className="post-comment-menu"></div>
            </div>
        </div>
    );
}

export default PostCommentView;
