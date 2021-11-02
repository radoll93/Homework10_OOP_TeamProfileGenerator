const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    getRole() {
        return 'Manager';
    }
}

const sampleEmployee = new Employee('a', 'b', 'c');

console.log(sampleEmployee.getName());
console.log(sampleEmployee.getId());
console.log(sampleEmployee.getRole());

const sampleManager = new Manager('a', 'b', 'c', 'd');
console.log(sampleManager.getName());
console.log(sampleManager.getId());
console.log(sampleManager.getNumber());
console.log(sampleManager.getRole());

module.exports = Manager;