const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

const sampleEmployee = new Employee('a', 'b', 'c');

console.log(sampleEmployee.getName());
console.log(sampleEmployee.getId());
console.log(sampleEmployee.getRole());

const sampleIntern = new Intern('a', 'b', 'c', 'd');
console.log(sampleIntern.getName());
console.log(sampleIntern.getId());
console.log(sampleIntern.getSchool());
console.log(sampleIntern.getRole());

module.exports = Intern;
