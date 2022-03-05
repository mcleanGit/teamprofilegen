// Manager class extends Employee; Manager.js extends Employee.js
const Employee = require('./Employee');

class Manager extends Employee {
 constructor(name, id, email, officeNumber) {
 super(name, id, email);
  this.officeNumber = officeNumber;
 };
// adds the extension method for manager
 getOfficeNumber() {
  return this.officeNumber;
 }
 getRole() {
  return 'Manager';
// overridden to return 'Manager'
 }
}
module.exports = Manager;
