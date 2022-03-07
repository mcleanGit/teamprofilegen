// Intern.test.js Intern tests using Jest
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("can enter School affiliation via getSchool", () => {
 const testvalue = "2University";
 const e = new Intern("John", 5, "john@fakemail.com", testvalue);
 expect(e.getSchool()).toBe(testvalue);
});

test("can use getRole() to return \"Intern\"", () => {
 const testValue = "Intern";
 const e = new Intern(("John", 5, "john@fakemail.com", "2University"));
 expect(e.getRole()).toBe(testValue);
});