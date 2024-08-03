import React from "react";

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