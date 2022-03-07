// this helper file is in src directory and is generateHTML
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// tbd if templates method for component parts is necessary
// const templatesDir = path.resolve(__dirname, "../templates");

function generateHTML(data) {
 return `
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>MyTeam teamprofilegen</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
 </head>

 <body>
<!-- header+.html template -->
  <div class="container-fluid">
   <div class="row">
     <div class="col-12 mb-3 jumbotron title-heading bg-danger text-white">
      <h1 class="text-center">MyTeam</h1>
     </div>
   </div>
   <div class="container">
   <div class="row">
    <div class="col-12 team-container d-flex flex-wrap justify-content-center">

<!-- manager.html template -->  
     <div class="card employee-card mx-2">
      <div class="card-header bg-primary">
       <h2 class="card-title text-white">${data.name}</h2>
       <h3 class="card-title text-white"><i class="fas fa-mug-hot mr-2 text-white">${data.role}</i</h3>
      </div>
      <div class="card-body">
       <ul class="list-group">e
        <li class="list-group-item">ID:${data.id}</li>
        <li class="list-group-item">Email:${"email"}</li>
        <li class="list-group-item">Office number:${data.officeNumber}</li>
       </ul>
       </div>
      </div>

<!-- engineer.html template -- note: there are three instances of software engineer employees >
     <div class="card employee-card mx-2">
      <div class="card-header bg-primary">
        <h2 class="card-title text-white">${data.name}</h2>
       <h3 class="card-title text-white"><i class="fas fa-glasses mr-2 text-white"></i>${data.role}</h3>
      </div>
     <div class="card-body">
      <ul class="list-group">
       <li class="list-group-item">ID:${data.id}</li>
       <li class="list-group-item">Email:${data.email}</li>
       <li class="list-group-item">GitHub:${data.github}</li>
      </ul>
     </div>
    </div>

<!-- intern.hmtl template>
    <div class="card employee-card mx-2">
     <div class="card-header bg-primary">
      <h2 class="card-title text-white">${data.name}</h2>
      <h3 class="card-title text-white"><i class="fas fa-user-graduate mr-2 text-white"></i>${data.role}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
       <li class="list-group-item">ID:${data.id}</li>
       <li class="list-group-item">Email:${data.email}</li>
       <li class="list-group-item">School:${data.school}</li>
      </ul>
     </div>
    </div>
 </body>
</html>
 `

};
module.exports = generateHTML;

