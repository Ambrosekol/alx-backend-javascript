const process = require('process');

function displayMessage(ams) {
  process.stdout.write(`${ams}\n`);
}

module.exports = displayMessage;
