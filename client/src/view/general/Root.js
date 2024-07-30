import React from "react";
import { Outlet } from "react-router-dom";

function Root({ isLoggedIn, user }) {
    return (
        <div className="root">
            <div className="root-header"></div>
            <div className="root-separator"></div>
            <div className="root-outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
