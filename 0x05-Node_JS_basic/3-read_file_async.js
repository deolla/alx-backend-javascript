const fs = require('fs');

function countStudents(fileName) {
  const stu = {}; // Student count by field
  const fld = {}; // Field count
  let len = 0; // Total number of lines

  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            len += 1;
            const fields = lines[i].toString().split(',');
            const field = fields[3];
            if (stu.hasOwnProperty(field)) {
              stu[field].push(fields[0]);
            } else {
              stu[field] = [fields[0]];
            }
            if (fld.hasOwnProperty(field)) {
              fld[field] += 1;
            } else {
              fld[field] = 1;
            }
          }
        }
        const l = len - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fld)) {
          if (key !== 'field') {
            console.log(
              `Number of students in ${key}: ${value}. List: ${stu[key].join(
                ', '
              )}`
            );
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
