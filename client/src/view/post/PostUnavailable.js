import React from "react";

function PostUnavailable({ text }) {
    return (
        <div className="info">
            <div className="info-box">
                <div className="info-text">{text}</div>
            </div>
        </div>
    );
}

export default PostUnavailable;
