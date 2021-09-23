import React, { useState } from "react";

function Search({setSearchQuery, setPageNumber}) {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    };

    const searchQuery = (event) => {
        setSearchQuery(value);
        setPageNumber(1);
    }

    return (
        <>
            <input value={value} onChange={onChange} />
            <button onClick={searchQuery} className="button">Search</button>
        </>
    );
}

export default Search;