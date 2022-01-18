createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${manager.name}</h3>
                <h4><i class="material-icons">free_breakfast</i>Manager</h4>
            </div>
            <div class="card-body bg-light text-dark">
                <p class="id bg-white p-2 border rounded m-0">ID: ${manager.id}</p>
                <p class="email bg-white p-2 border rounded m-0">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office bg-white p-2 border rounded m-0">Office Number: ${manager.officeNum}</p>
            </div>
        </div>
    </div>
    `
};

createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${engineer.name}</h3>
                <h4><i class="material-icons">work</i>Engineer</h4>
            </div>
            <div class="card-body bg-light text-dark">
                <p class="id bg-white p-2 border rounded m-0">ID: ${engineer.id}</p>
                <p class="email bg-white p-2 border rounded m-0">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github bg-white p-2 border rounded m-0">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${intern.name}</h3>
                <h4><i class="material-icons">weekend</i>Intern</h4>
            </div>

            <div class="card-body bg-light text-dark">
                <p class="id bg-white p-2 border rounded m-0">ID: ${intern.id}</p>
                <p class="email bg-white p-2 border rounded m-0">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school bg-white p-2 border rounded m-0">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

generatePage = (employeeCards) => {

    return `
    <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Team Profile Generator</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
              <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              <link rel="stylesheet" href="./style.css">
          </head>
          <body>
              <header>
                  <nav class="navbar bg-danger text-white" id="navbar">
                      <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
                  </nav>
              </header>
              <main>
                  <div class="container">
                      <div class="row" id="team-cards">
                          <!--Generated Employee Cards-->
                            ${employeeCards}
                      </div>
                  </div>
              </main>
          </body>
  
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  
      </html>
      
      `;
  }

generateHTML = (data) => {
    employeesArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            employeesArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            employeesArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee);

            employeesArray.push(internCard);
        }
    }

    const employeeCards = employeesArray.join('')

    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

module.exports = generateHTML;

