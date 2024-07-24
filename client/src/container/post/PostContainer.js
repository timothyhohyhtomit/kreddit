import React from "react";

import PostView from "../../view/post/PostView";

function PostContainer({ post }) {
    return (
        <PostView
            post={post}
        />
    );
}

export default PostContainer;