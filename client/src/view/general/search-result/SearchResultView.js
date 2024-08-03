import React from "react";

import SearchResultHeaderView from "./SearchResultHeaderView";
import SearchResultOptionsView from "./SearchResultOptionsView";
import SearchResultNoEntriesView from "./SearchResultNoEntriesView";
import SearchResultEntriesView from "./SearchResultEntriesView";

import "./SearchResultView.css";

function SearchResultView({ query, entries }) {
    return (
        <div className="search-result">
            <SearchResultHeaderView
                query={query}
            />
            <SearchResultOptionsView />
            { entries == null || entries.length === 0 ? 
                <SearchResultNoEntriesView /> :
                <SearchResultEntriesView
                    entries={entries}
                />
            }
        </div>
    );
}

export default SearchResultView;