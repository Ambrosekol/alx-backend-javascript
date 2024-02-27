/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const process = require('process');

function displayMessage(ams) {
  process.stdout.write(`${ams}\n`);
}

module.exports = displayMessage;
