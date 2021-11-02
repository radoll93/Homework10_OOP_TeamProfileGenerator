const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

const sampleEmployee = new Employee('a', 'b', 'c');

console.log(sampleEmployee.getName());
console.log(sampleEmployee.getId());
console.log(sampleEmployee.getRole());

const sampleEngineer = new Engineer('a', 'b', 'c', 'd');
console.log(sampleEngineer.getName());
console.log(sampleEngineer.getId());
console.log(sampleEngineer.getGithub());
console.log(sampleEngineer.getRole());

module.exports = Engineer;