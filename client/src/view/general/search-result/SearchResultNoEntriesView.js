import React from "react";

import "./SearchResultNoEntriesView.css";

function SearchResultNoEntriesView() {
    return (
        <div className="search-result-none">
            <div className="search-result-none-box">
                <div className="search-result-none-icon">Icon</div>
                <div className="search-result-none-text">
                    <div className="search-result-none-title">No Result</div>
                    <div className="search-result-none-content">Check your spelling or try a different keyword.</div>
                </div>
            </div>
        </div>
    );
}

export default SearchResultNoEntriesView;
