const http = require('http');
const { readFile } = require('fs');

const host = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const stu = {};
  const fld = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            len += 1;
            const fields = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stu, fields[3])) {
              stu[fields[3]].push(fields[0]);
            } else {
              stu[fields[3]] = [fields[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fld, fields[3])) {
              fld[fields[3]] += 1;
            } else {
              fld[fields[3]] = 1;
            }
          }
        }
        const l = len - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fld)) {
          if (key !== "field") {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${stu[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === "/") {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outStr = output.slice(0, -1);
        res.end(outStr);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
