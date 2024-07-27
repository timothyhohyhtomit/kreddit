import React from "react";

import CreatePostView from "../../view/post/CreatePostView";

const TAB_ENUM = {
    text: 1,
    images: 2
};

function CreatePostPage() {
    // states
    const [selectedTab, setSelectedTab] = useState(TAB_ENUM.text);
    return (
        <CreatePostView
            handleCreatePostSubmit={handleCreatePostSubmit}
        />
    );
}

export default CreatePostPage;