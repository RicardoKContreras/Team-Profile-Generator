// const Employee = require('../lib/Employee.js');
const Engine = require('../lib/Engineer.js');

module.exports = generateHTML => {
   console.log(generateHTML.info)
   const employeeEngineer = Engineer1 => {
    if(generateHTML.info === 'Engineer') {
         console.log(Engineer);
        console.log(Engineer1);
        console.log(Engine.role);

        
    }
   }
    
   return `
    <!DOCTYPE html>
    <html lang="en">
    <head>${generateHTML.info}
    ${employeeEngineer(generateHTML.info)}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
      <header>
      <div class= "container flex-row justify-space-between align-center py-3">
      <h1 class= "page-title text-secondary bg-dark py-2 px-3"></h1>
      <nav class="flex-row">
        <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="">Github</a>
      </nav>https://github.com/
      </div>
      </header>
      <main class="container my-5">
        
        
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by </h3>
      </footer>
      </body>
      </html>
    `;
   
};
