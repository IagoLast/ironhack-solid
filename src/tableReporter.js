function report(employees) {
    employees.forEach(employee => {
        console.table(employee);
    });
}

module.exports = { report }