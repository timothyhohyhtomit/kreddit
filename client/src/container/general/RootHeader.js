import React from "react";
import { useNavigate } from "react-router";

import RootHeaderView from "../../view/general/RootHeaderView";

function RootHeader({ searchQuery, setSearchQuery, handleClickSearch }) {
    // navigate
    const navigate = useNavigate();
    // handlers
    const handleClickCreatePost = (e) => {
        navigate("/post/create");
    };
    return (
        <RootHeaderView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleClickCreatePost={handleClickCreatePost}
        />
    );
}

export default RootHeader;
