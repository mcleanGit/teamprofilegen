# MyTeam: team profile generator

# Object-Oriented Programming: Team Profile Generator

## Description
The challenge involves building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making the code maintainable, unit tests are provided for each part of the code.
These are currently limited tests for the four employee types -- employee, manager, engineer, intern -- using Jest.

As this application is not deployed, a walkthrough video is provided. A link to the video is found below and is added to this README.
Note: I have been unable to resolve a problem connecting the index.js at writeFile to generate the HTML. Will require more time. Attempted to make the connection through generateHTML helper file, but there are still some issues to resovle.


The challege User Story and Acceptance Criteria of the original assignment are shown in the following sections.

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
 THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
 THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
 THEN that GitHub profile opens in a new tab
WHEN I start the application
 THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
 THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
 THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
 THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
 THEN I exit the application, and the HTML is generated

## Mock-Up

The following image shows the generated HTML’s appearance and functionality.
![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)


## Getting Started

Guidelines in addition to the User Story and Acceptance Criteria are summarized here.

The applications uses [Jest](https://www.npmjs.com/package/jest) to run the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) to collect input from the user. The application is invoked by using the following command in the terminal: ```node index.js```.

The directory structure for the project is as follows:
```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet
├── lib/                   // classes
├── src/                   // template helper code
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json
```

**Reminder**: Remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application has these classes: `Employee`, `Manager`, `Engineer`, and `Intern`. The tests for these classes (in the `_tests_` directory) must all pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

* `officeNumber`

* `getRole()`   // Overridden to return `Manager`

In addition to `Employee`'s properties and methods, `Engineer` will also have:

* `github`  // GitHub username

* `getGithub()`

* `getRole()`   // Overridden to return `Engineer`

In addition to `Employee`'s properties and methods, `Intern` will also have:

* `school`

* `getSchool()`

* `getRole()`   // Overridden to return `Intern`

**To consider:** adding validation to ensure that the user input provided is in the proper expected format. TBD.


## Review

The following components are submitted for review:

* A walkthrough video demonstrating the functionality of the application and passing tests.

video link:

screen shots:
These provide a mock-up of the deployed HTML, and the passing Jest test results for the four Employee types, collectively and individually.

<img src="https://user-images.githubusercontent.com/94858165/156959463-c81321d9-d918-44e9-a0b4-1a6e4bdb46b8.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/94858165/156959495-6f4c463c-5db6-4ef8-a592-affd3a6c653a.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/94858165/156959518-215ff4a9-7a5d-4bcb-b72c-2ad80bc0cfde.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/94858165/156959537-59bfa166-4631-43e5-9296-81e45c3b3151.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/94858165/156959548-19c36f56-2b64-4a61-9d57-6b7fbac4c403.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/94858165/156959561-97d71482-be9d-433f-a08c-4364f7ef8693.png" width="30%"></img> 



* A sample HTML file generated using your application.

[MyTeam-teamprofilegen.html] https://github.com/mcleanGit/teamprofilegen/blob/main/output/index.html)

* The URL of the GitHub repository.
[MyTeam-teamprofilegen github repo] (https://github.com/mcleanGit/teamprofilegen)


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
