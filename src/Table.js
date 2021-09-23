import React from "react";

function Table(promp) {
    console.log(promp.apiData);  
  if (!promp.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    var tableData = promp.apiData.results;
    const colm = tableData[0] && Object.keys(tableData[0]);
    return (
    <>
    <table id="countries" cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>
                {tableData[0] && colm.map((heading) => <th>{heading}</th>)}
            </tr>
        </thead>

        <tbody>
            {tableData.map(row => 
                    <tr>
                        {colm.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                    )}
        </tbody>
    </table>
    </>
    );
  }
}

export default Table;
