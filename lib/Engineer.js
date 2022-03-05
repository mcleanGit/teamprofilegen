// Engineer.js format extends Employee.js (differs from manager)
const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email, github) {
  super(name, id, email);
// adds GitHub username with github prompt
  this.github = github;
  this.title = "Engineer";
 };
// gets github user name
 getGithub() {
  return this.github;
 }
}

module.exports = Intern;
