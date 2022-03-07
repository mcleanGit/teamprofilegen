// Employee.test.js Employee parent-class tests using Jest
const Employee = require('../lib/Employee.js');


test("can get ID via getId()", () => {
 const testvalue = "0";
 const e = new Employee("DRM", testvalue, "drm@fakemail.com");
 expect(e.getId()).toBe(testvalue);
});

test("can get email via getEmail()", () => {
 const testvalue = "drm@fakemail.com";
 const e = new Employee("DRM", 0, testvalue);
 expect(e.getEmail()).toBe(testvalue);
});

test("can use getRole() to return \"Employee\"", () => {
 const testValue = "Employee";
 const e = new Employee(("DRM", 0, "drm@fakemail.com"));
 expect(e.getRole()).toBe(testValue);
});
