class Employee {
    constructor(name, type, regularHours, extraHours) {
        this.name = name;
        this.type = type;
        this.regularHours = regularHours;
        this.extraHours = extraHours;
    }

    computeHours() {
        return this.regularHours + this.extraHours;
    }

    computeSalary() {
        return this.regularHours * 10 + this.extraHours * 15;
    }
}

module.exports = Employee;