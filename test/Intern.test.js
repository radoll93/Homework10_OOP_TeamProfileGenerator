const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Check the Intern class", () => {
      it("should return Intern's name, id, email, school and role", () => {
        const pia = new Intern('pia', '3', 'pia@gmail.com', 'emory');
  
        expect(pia.getName()).toEqual('pia');
        expect(pia.getId()).toEqual('3');
        expect(pia.getEmail()).toEqual('pia@gmail.com'); 
        expect(pia.getSchool()).toEqual('emory');
        expect(pia.getRole()).toEqual('Intern');
      });
    });
});