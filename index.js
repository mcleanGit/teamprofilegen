// index.js main JS file for teamprofilegen MyTeam app
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const MyTeam = [];

function start() {
 managerInput();
}

function managerInput() {
  inquirer.prompt(
   [
  {
   type: 'input',
   name: 'name',
   message: 'What is the Team Manager`s name?:'
  },
  {
   type: "input",
   name: "id",
   message: 'Enter the Team Manager`s ID number:'
  },
  {
   type: 'input',
   name: 'email',
   message: 'Team Manager`s email address:'
  },
  {
   type: 'input',
   name: 'officeNumber',
   message: 'Team Manager`s office number:'
  }
 ]).then(data => {
  const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  console.log(manager);
  MyTeam.push(manager);
  addToTeam();
 })
};

// provide function to add members to team, continuing after manager with engineer and intern prompt inputs
function addToTeam() {
 inquirer.prompt(
  [
   { 
    type: 'list',
    name: 'role',
    message: 'Add an engineer or an intern to the team?:',
    choices: ['Engineer', 'Intern', 'finish building MyTeam']
   }]).then(data => {
    if (data.role === 'Engineer') {
     engineerInput();
    } else if 
    (data.role === 'Intern') {
     internInput();
    } else {
      writeFile();
    }  
  });
}

function engineerInput() {
 inquirer.prompt(
  [
   { 
    type: 'input',
    name: 'name',
    message: 'What is this Engineer`s name?:'
   },
   {
    type: 'input',
    name: 'id',
    message: 'What is this Engineer`s ID number?:'
   },
   {
    type: 'input',
    name: 'email',
    message: 'Engineer`s email address:'
   },
   {
    type: 'input',
    name: 'github',
    message: 'What is this Engineer`s GitHub userName:'
   }
  ]).then(data => {
   const engineer = new Engineer(data.name, data.id, data.email, data.github);
   console.log(engineer);
   MyTeam.push(engineer);
   addToTeam();
  })
 };
 
 function internInput() {
  inquirer.prompt(
   [
    { 
     type: 'input',
     name: 'name',
     message: 'What is this Intern`s name?:'
    },
    {
     type: 'input',
     name: 'id',
     message: 'What is this Intern`s ID number?:'
    },
    {
     type: 'input',
     name: 'email',
     message: 'Intern`s email address:'
    },
    {
     type: 'input',
     name: 'school',
     message: 'What is the school affiliation of this Intern?:'
    }
   ]).then(data => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    console.log(intern);
    MyTeam.push(intern);
    addToTeam();
   })
  };

function writeFile() {
  const outputDirectory = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }
  fs.writeFileSync(path.join(outputDirectory, "index.html"), generateHTML(MyTeam), function(err) {
   if (err) return console.log(err);
   console.log(MyTeam);
 });
}
// start invoked at end of js file
// start invoked with node index.js on terminal
start();
 
// MyTeam