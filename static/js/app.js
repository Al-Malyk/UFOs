// import the data from data.js
//  --- in the import line below
const tableData = data;
// reference the HTML table using D3
var tbody = d3.select("tbody");
// write a function to build the table
function buildTable(data){
    // first line clears the table. to clear previous users data.
    tbody.html("");
    // write a function to iterate through the object using forEach()
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // another forEach() function to loop through the row data(dataRow)
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
        });
    });
};
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
