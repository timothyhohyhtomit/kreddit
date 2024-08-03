import React, { useState } from "react";
import { useNavigate } from "react-router";

import RootHeaderView from "../../view/general/RootHeaderView";

function RootHeader() {
    // STATES
    // search bar
    const [searchQuery, setSearchQuery] = useState("");
    // NAVIGATE
    const navigate = useNavigate();
    // HANDLERS
    const handleClickSearch = (e) => {
        if (e.key === "Enter") {
            navigate("/search/" + searchQuery);
        }
    };
    const handleClickCreatePost = (e) => {
        navigate("/post/create");
    };
    return (
        <RootHeaderView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleClickSearch={handleClickSearch}
            handleClickCreatePost={handleClickCreatePost}
        />
    );
}

export default RootHeader;
