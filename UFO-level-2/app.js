// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create "tbody" variable from tbody HTML element
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Looping through the UFO DATA list, adding row for each "sighting"
data.forEach(function(sighting) {
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {

    // Append a cell to the row for each value in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredDate = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredDate);

  // Create list variable from tbody HTML element
  var list = d3.select("tbody");

  // Remove original data from table
  list.html("");

  // Append the number of table rows for updated data
  filteredDate.forEach((filteredDate) => {
    var row = tbody.append("tr");

    Object.entries(filteredDate).forEach(([key, value]) => {

      // Append a cell to the row for each updated value
      var cell = row.append("td");
      cell.text(value);
  });
  });
});