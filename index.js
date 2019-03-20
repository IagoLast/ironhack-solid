const args = process.argv.slice(2);
const app = require('./src/app.js');
const logReporter = require('./src/reporter');
const tableReporter = require('./src/tableReporter.js');

const reporter = args.includes('--table') ? tableReporter : logReporter;

// Run the app
app.run(reporter);