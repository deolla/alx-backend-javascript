interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

// Create two students.
const Student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Canada'
};
const Student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 19,
    location: 'USA'
};

// Create an array of studentsList containing the two students
const studentsList: Student[] =  [Student1, Student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");

// Create table header
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

// Append rows for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  // Add student data to cells
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);