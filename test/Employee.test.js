const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Check the employee class", () => {
      it("should return employee's name, id and email", () => {
        const mike = new Employee('Mike', '1', 'mike@gmail.com');
  
        expect(mike.getName()).toEqual('Mike');
        expect(mike.getId()).toEqual('1');
        expect(mike.getEmail()).toEqual('mike@gmail.com');
      });
    });
});
  