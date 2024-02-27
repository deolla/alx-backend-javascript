const express = require("express");
const readFile = require("fs");

const app = express();
const port = 1245;

function countStudents(fileName) {
  const stu = {};
  const fld = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    readFile.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = "";
        const lines = data.toString().split("\n");
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            len += 1;
            const fields = lines[i].toString().split(",");
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
            output += `List: ${stu[key].join(", ")}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});
app.get("/students", (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(["This is the list of our students", output].join("\n"));
    })
    .catch(() => {
      res.send("This is the list of our students\nCannot load the database");
    });
});

app.listen(port, () => {});

module.exports = app;
