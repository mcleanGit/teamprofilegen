// Intern.js format extends Employee.js (differs from manager, engineer)
const Employee = require('./Employee');

class Intern extends Employee {
 constructor (name, id, email, school)
  super (name, id, email);
  // adds educational institution with school prompt
  this.school = school;
  this.title = "Intern"
}
