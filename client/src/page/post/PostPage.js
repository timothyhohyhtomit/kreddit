import React, { useEffect, useState } from "react";
import PostContainer from "../../container/post/PostContainer";

function PostPage({ isLoggedIn, user }) {
    // states
    const [post, setPost] = useState({});
    // effects
    useEffect(() => {
        // fetch post based on post id

    });
    return (
        <PostContainer
            post={post}
        />
    );
}

export default PostPage;