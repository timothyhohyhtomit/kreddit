import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchResultPage() {
    // PARAMS
    const query = useParams().query;
    // STATES
    // search results
    const [entries, setEntries] = useState([]);
    // EFFECTS
    useEffect(() => {
        // fetch search results from server and store them in entries
    }, []);
    return (
        <SearchResultView
            query={query}
            entries={entries}
        />
    );
}

export default SearchResultPage;