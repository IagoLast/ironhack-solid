const Employee = require('./Employe');
const reporter = require('./reporter.js');

function run() {
    // Simulate get employees
    const alice = new Employee('Alice', 'junior', 30, 0);
    const bob = new Employee('bob', 'regular', 40, 10);
    const carol = new Employee('Carol', 'senior', 50, 5);
    // Create an array
    const employees = [alice, bob, carol];
    // Create report
    reporter.report(employees);
}

module.exports = { run };