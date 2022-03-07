// Engineer.test.js Engineer tests using Jest
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("can enter github userName via getGithub", () => {
 const testvalue = "ibealec";
 const e = new Engineer("Alec", 2, "alec@fakemail.com", testvalue);
 expect(e.getGitHub()).toBe(testvalue);
});

test("can use getRole() to return \"Engineer\"", () => {
 const testValue = "Engineer";
 const e = new Engineer(("Alec", 2, "alec@fakemail.com", "ibealec"));
 expect(e.getRole()).toBe(testValue);
});
