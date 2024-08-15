import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import PostAddCommentView from "./comment/PostAddCommentView";

import "./PostView.css";

function PostView({ ownerProfilePictureUrl, ownerUsername, title, content, upvoteCount, newComment, setNewComment, handlePostAddCommentClickSubmit, addCommentInputRef }) {
    return (
        <div className="post">
            <div className="post-header">
                <img className="post-author-profile-picture" src={ownerProfilePictureUrl} />
                <div className="post-author">{ownerUsername}</div>
            </div>
            <div className="post-title">{title}</div>
            <div className="post-content">{content}</div>
            <div className="post-image"></div>
            <div className="post-reaction-buttons">
                <div className="post-reaction-button post-likes">
                    <div className="post-upvote">
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                    <div className="post-upvote-count">{upvoteCount}</div>
                    <div className="post-downvote">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <div className="post-reaction-button post-comment-count"></div>
                <div className="post-reaction-button post-share"></div>
                <div className="post-reaction-button post-save"></div>
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
