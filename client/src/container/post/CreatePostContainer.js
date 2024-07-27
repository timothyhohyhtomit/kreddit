import React from "react";

const TAB_ENUM = {
    text: 1,
    images: 2
};

function CreatePostContainer({ handleCreatePostSubmit }) {
    // states
    const [selectedTab, setSelectedTab] = useState(TAB_ENUM.text);
    return (
        <CreatePostView />
    );
}

export default CreatePostContainer;
