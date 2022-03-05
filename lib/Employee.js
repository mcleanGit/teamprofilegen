// Employee.js formats have been 3 x refactored from const to function to class...
// creates Employee object as parent class
class Employee {
 constructor(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
 }
// runs methods for Employee class based on user input prompts
  getName() {
   return this.name;
  }
  getId() {
   return this.id;
  }
  getEmail() {
   return this.email;
  }
  getRole() {
   return 'Employee';
  }
}

module.exports = Employee;