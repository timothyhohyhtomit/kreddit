import React from "react";

import CreatePostView from "../../view/post/CreatePostView";

const TAB_ENUM = {
    text: 1,
    images: 2
};

function CreatePostPage() {
    // tabs
    const [selectedTab, setSelectedTab] = useState(TAB_ENUM.text);
    // title
    const [title, setTitle] = useState("");
    // content
    const [content, setContent] = useState("");
    // handlers for submit create post request
    const handleCreatePostSubmit = (e) => {};
    return (
        <CreatePostView
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            handleCreatePostSubmit={handleCreatePostSubmit}
        />
    );
}

export default CreatePostPage;