process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const pop = process.stdin.read();

  if (pop) {
    process.stdout.write(`Your name is: ${pop}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
