const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Check the Manager class", () => {
      it("should return Manager's name, id, email, number and role", () => {
        const aiden = new Manager('aiden', '3', 'aiden@gmail.com', '4703333');
  
        expect(aiden.getName()).toEqual('aiden');
        expect(aiden.getId()).toEqual('3');
        expect(aiden.getEmail()).toEqual('aiden@gmail.com'); 
        expect(aiden.getNumber()).toEqual('4703333');
        expect(aiden.getRole()).toEqual('Manager');
      });
    });
});