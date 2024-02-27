/**
 * This is a standalone program that reads stdin
 */
const process = require('process');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const stream = process.stdin.read();

  if (stream) {
    process.stdout.write(`your name is: ${stream}`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
