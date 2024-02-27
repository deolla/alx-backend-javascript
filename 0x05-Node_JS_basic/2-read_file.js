const fs = require('fs');

// Function to count students and log information
function countStudents(fileName) {
  // Initialize objects to store student lists and field counts
  const studentsByField = {};
  const fieldCounts = {};
  let totalStudents = 0;

  try {
    // Read content of the file synchronously
    const fileContent = fs.readFileSync(fileName, 'utf-8');

    // Split the content into lines
    const lines = fileContent.toString().split('\n');

    // Iterate through each line
    for (let i = 0; i < lines.length; i += 1) {
      // Check if the line is not empty
      if (lines[i]) {
        // Increment totalStudents count
        totalStudents += 1;

        // Split the line into fields
        const fields = lines[i].toString().split(',');

        // Update studentsByField object
        if (Object.prototype.hasOwnProperty.call(studentsByField, fields[3])) {
          studentsByField[fields[3]].push(fields[0]);
        } else {
          studentsByField[fields[3]] = [fields[0]];
        }

        // Update fieldCounts object
        if (Object.prototype.hasOwnProperty.call(fieldCounts, fields[3])) {
          fieldCounts[fields[3]] += 1;
        } else {
          fieldCounts[fields[3]] = 1;
        }
      }
    }

    // Calculate the total number of students (excluding empty lines)
    const adjustedTotalStudents = totalStudents - 1;

    // Log the total number of students
    console.log(`Number of students: ${adjustedTotalStudents}`);

    // Iterate through fieldCounts and log information for each field
    for (const [key, value] of Object.entries(fieldCounts)) {
      if (key !== 'field') {
        console.log(
          `Number of students in ${key}: ${value}. List: ${studentsByField[
            key
          ].join(', '),}`
        );
      }
    }
  } catch (error) {
    // Throw an error if there is an issue loading the database
    throw Error('Cannot load the database');
  }
}

// Export the countStudents function for external use
module.exports = countStudents;
