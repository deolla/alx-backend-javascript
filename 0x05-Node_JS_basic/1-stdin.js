// A program that will be executed through a command line interface.

process.stdout.write("Welcome to Holberton School, What is your name?\n");

if (process.stdin.isTTY) {
  process.stdin.on("data", function (data) {
    const output = data.toString().trim();
    process.stdout.write("Your name is: " + output);
    process.exit();
  });
} else {
  process.stdin.on("data", function (data) {
    const input = data.toString().trim();
    process.stdout.write("Your name is:", input);
    process.exit();
  });
  process.stdin.on("end", function () {
    process.stdout.write("This important software is now closing \n");
  });
}
