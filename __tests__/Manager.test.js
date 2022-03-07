// Manager.test.js Manager tests using Jest
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("can enter officeNumber via getOfficeNumber()", () => {
 const testvalue = 416-555-5555;
 const e = new Manager("Jared", 1, "jared@fakemail.com", testvalue);
 expect(e.getOfficeNumber()).toBe(testvalue);
});

test("can use getRole() to return \"Manager\"", () => {
 const testValue = "Manager";
 const e = new Manager(("Jared", 1, "jared@fakemail.com", "416-555-5555"));
 expect(e.getRole()).toBe(testValue);
});
