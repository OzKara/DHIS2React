import React from "react";

function Pagination( { setPageNumber, apiData }) {

    const onNext = (page) => {
        setPageNumber(parseInt(page) + 1)
    };

    const onPrevious = (page) => {
        setPageNumber(parseInt(page) - 1)
    };

    if (apiData.pager) {
        const page = apiData.pager.page;
        const pageCount = apiData.pager.pageCount;

        return (
            <div>
                {page > 1 ?
                    <button onClick={() => onPrevious(page)} className="button">Previous</button>
                    : <></>
                }
                <span>Page {page} of {pageCount}</span>
                {page < pageCount ?
                    <button onClick={() => onNext(page)} className="button">Next</button>
                    : <></>
                }
            </div>         
        );
    }
    else {
        return (<div></div>);
    }
}

export default Pagination;