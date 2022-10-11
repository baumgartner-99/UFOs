// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear data
    tbody.html("");

    // loop through each object in the data
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in dataRow
        Object.values(dataRow).forEach((val) => {
            //add each value as a table cell (td)
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild table using the filtered data
    // if no date entered, just use original tableData
    buildTable(filteredData);
};

// listen for the "click"
d3.selectAll("#filter-btn").on("click", handleClick);

// build the final table when the page loads 
buildTable(tableData);