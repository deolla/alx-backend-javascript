// Create two students.
var Student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Canada'
};
var Student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 19,
    location: 'USA'
};
// Create an array of studentsList containing the two students
var studentsList = [Student1, Student2];
// Render a table using Vanilla JavaScript
var table = document.createElement("table");
// Create table header
var headerRow = table.insertRow();
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";
// Append rows for each student in the array
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Add student data to cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
// Append the table to the body of the document
document.body.appendChild(table);
//# sourceMappingURL=main.js.map