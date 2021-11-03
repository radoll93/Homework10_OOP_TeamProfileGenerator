const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Check the Engineer class", () => {
      it("should return Engineer's name, id, email, github and role", () => {
        const jake = new Engineer('Jake', '2', 'jake@gmail.com', 'jakejake');
  
        expect(jake.getName()).toEqual('Jake');
        expect(jake.getId()).toEqual('2');
        expect(jake.getEmail()).toEqual('jake@gmail.com'); 
        expect(jake.getGithub()).toEqual('jakejake');
        expect(jake.getRole()).toEqual('Engineer');
      });
    });
});