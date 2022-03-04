// Employee.test.js file
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
 const employee = new Employee('name');

 expect(employee.name).toBe('name');
 expect(employee.id).toEqual((Number));
 expect(employee.email).toBe('email');

 expect(employee.role).toBe["name", Number, "email"]

});
