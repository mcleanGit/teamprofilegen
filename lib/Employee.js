// Employee.js
function Employee(name = '') {
 this.name = name;
 this.id = Number;
 this.email = 'email';

 this.role = [name, Number, 'email'];
};

// Employee properties
 Employee.prototype.getProperties = function() {
  return {
   name: this.name,
   id: this.id,
   email: this.email
  };
 };
// Employee methods
Employee.prototype.getRole = function() {
 if (this.Employee.getProperties.prototype) {
  return Employee;
 }
  return false;
};

module.exports = Employee;