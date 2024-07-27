import React from "react";

import CreatePostContainer from "../../container/post/CreatePostContainer";

function CreatePostPage() {
    return (
        <CreatePostContainer
            handleCreatePostSubmit={handleCreatePostSubmit}
        />
    );
}

export default CreatePostPage;