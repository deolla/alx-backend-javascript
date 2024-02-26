const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const lines = data.trim().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const fields = lines[i].toString().split(',');
            const firstName = fields[0];
            const field = fields[3];

            if (students[field]) {
              students[field].push(firstName);
            } else {
              students[field] = [firstName];
            }
          }
        }

        resolve(students);
      }
    });
  });
}

module.exports = {
  readDatabase,
};
