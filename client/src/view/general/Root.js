import React from "react";
import { Outlet } from "react-router-dom";

import RootHeader from "../../container/general/RootHeader";

function Root({ isLoggedIn, user }) {
    return (
        <div className="root">
            <RootHeader />
            <div className="root-separator"></div>
            <div className="root-outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
