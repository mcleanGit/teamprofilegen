// Manager.js format extends Employee.js
const Employee = require('./Employee');

class Manager extends Employee {
 constructor(name, id, email, officeNumber) {
  super (name, id, email);
  this.officeNumber = officeNumber;
  this.tile = "Manager";
 };
// adds the extension method for manager
 getOfficeNumber() {
  return this.officeNumber;
 }
}
module.exports = Manager;
