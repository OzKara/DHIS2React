import React from "react";

function PageSize({ setPageSize }) {
    const onChange = (event) => {
        setPageSize(event.target.value)
    };
    return (
        <div>
            <span>Results per page</span>
            <select name="results" id="results" onChange={onChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
    )
}

export default PageSize;