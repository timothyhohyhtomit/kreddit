import React from "react";

import "./SearchResultHeaderView.css";

function SearchResultHeaderView({ query }) {
    return (
        <div className="search-result-header">
            <h1>Search Result for "{query}"</h1>
        </div>
    );
}

export default SearchResultHeaderView;
