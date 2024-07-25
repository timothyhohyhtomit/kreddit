import React, { useEffect, useState } from "react";
import PostContainer from "../../container/post/PostContainer";
import { useNavigate, useParams } from "react-router-dom";

function PostPage({ isLoggedIn, user }) {
    // states
    const postId = useParams().postId;
    const [isAvailable, setAvailable] = useState(true);
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
        
    });
    return (
        <PostContainer
            post={post}
        />
    );
}

export default PostPage;