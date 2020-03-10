// Create a variable from data.js
var tableData = data;

// Create "tbody" variable from tbody HTML element
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Looping through the UFO DATA list, adding row for each "sighting"
data.forEach(function(sighting) {
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    var filterClasses = ["date", "city", "state", "country", "shape"];    


  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = people.filter(person => person.bloodType === inputValue);

  console.log(filteredData);

});



// Create references for inputs based on "data"
//     var inputElement = d3.selectAll(".list-);


// // button.on("click", function() {