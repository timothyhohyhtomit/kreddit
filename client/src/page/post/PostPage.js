import React, { useEffect, useState } from "react";
import PostContainer from "../../container/post/PostContainer";
import { useNavigate, useParams } from "react-router-dom";

function PostPage({ isLoggedIn, user }) {
    // states
    const postId = useParams().postId;
    const [isAvailable, setAvailable] = useState(true);
    const [postUnavailableText, setPostUnavailableText] = useState("");
    const [post, setPost] = useState({});
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
        <PostContainer
            post={post}
        />
    );
}

export default PostPage;