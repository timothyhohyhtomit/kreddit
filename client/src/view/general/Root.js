import React from "react";
import { Outlet } from "react-router-dom";

import RootHeader from "../../container/general/RootHeader";

import "./Root.css";

function Root({ isLoggedIn, user, searchQuery, setSearchQuery, handleClickSearch, handleClickCreatePost }) {
    return (
        <div className="root">
            <RootHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleClickCreatePost={handleClickCreatePost}
            />
            <div className="root-separator"></div>
            <div className="root-outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
