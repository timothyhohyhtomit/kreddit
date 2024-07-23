import React, { useState } from "react";
import PostAddCommentView from "../../view/post/PostAddCommentView";

function PostAddCommentContainer({ handleClickSubmit, addCommentInputRef }) {
    // states
    const [newComment, setNewComment] = useState("");
    return (
        <PostAddCommentView
            newComment={newComment}
            setNewComment={setNewComment}
            handleClickSubmit={handleClickSubmit}
            addCommentInputRef={addCommentInputRef}
        />
    );
}

export default PostAddCommentContainer