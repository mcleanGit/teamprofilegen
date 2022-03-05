// Intern class =extends Employee class Intern.js extends Employee.js (differs from manager, engineer)
const Employee = require('./Employee');

class Intern extends Employee {
 constructor (name, id, email, school)
   super (name, id, email);
   school = this.school;

  // adds educational institution with school prompt
   getSchool() {
    return this.school;
   }
   getRole() {
    return 'Intern';
// overridden to return 'Intern'
   }
}

module.exports = Intern;
