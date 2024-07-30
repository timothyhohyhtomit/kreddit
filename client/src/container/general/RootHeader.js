import React from "react";
import { useNavigate } from "react-router";

import RootHeaderView from "../../view/general/RootHeaderView";

function RootHeader() {
    // navigate
    const navigate = useNavigate();
    // handlers
    const handleClickCreatePost = (e) => {
        navigate("/post/create");
    };
    return (
        <RootHeaderView
            handleClickCreatePost={handleClickCreatePost}
        />
    );
}

export default RootHeader;
