// Engineer class extends Employee class; Engineer.js extends Employee.js (differs from Manager)
const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email, github) {
  super(name, id, email);
// adds GitHub username with github prompt
  this.github = github;
 };
// gets github user name
 getGithub() {
  return this.github;
 }
 getRole() {
  return "Engineer"
// overriden to return 'Engineer'
 }
}

module.exports = Intern;
