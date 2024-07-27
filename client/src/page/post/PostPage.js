import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PostView from "../../view/post/PostView";

function PostPage({ isLoggedIn, user }) {
    // states
    const postId = useParams().postId;
    const [isAvailable, setAvailable] = useState(true);
    const [postUnavailableText, setPostUnavailableText] = useState("");
    const [post, setPost] = useState({});
    const [newComment, setNewComment] = useState("");
    // navigate
    const navigate = useNavigate();
    // effects
    useEffect(() => {
        // fetch post based on post id
        // invalid post id
        if (isNaN(postId)) {
            setAvailable(false);
            return;
        }
        // post id is valid, fetch post data from server
        fetch(SERVER_URL + "/post/" + postId)
        .then(response => {
            if (response.status === 404) {
                setAvailable(false);
            }
            return response.json();
        }).then(jsonData => {
            if (jsonData.error) throw new Error(jsonData.error);
            setPost(jsonData);
        }).catch(err => {
            alert("Post (post_id=" + postId + ") is unavailable: " + err.message);
        });
    }, []);
    return (
        <PostView
            authorProfilePictureUrl={post.author_avatar_url}
            authorUsername={post.author_username}
            title={post.title}
            content={post.content}
            newComment={newComment}
            setNewComment={setNewComment}
            handlePostAddCommentClickSubmit={handlePostAddCommentClickSubmit}
            addCommentInputRef={addCommentInputRef}
        />
    );
}

export default PostPage;