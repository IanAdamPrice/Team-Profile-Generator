const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];
const generatePage = require('./src/generatePage');
const { generate } = require('rxjs');

const createManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the manager's name!");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's id?",
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log("Please enter the manager's ID!");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?",
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter the manager's email");  
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNum',
      message: "What is the manager's office number?",
      validate: officeNumInput => {
        if (officeNumInput) {
            return true;
        } else {
            console.log("Please enter manager's office number!");
            return false;
        }
      }
    }
  ])
  .then(managerObject => {
    const { name, id, email, officeNum } = managerObject;
    const manager = new Manager (name, id, email, officeNum)

    employees.push(manager);

    console.log(manager)
  })
}; //end of addManager function

const addEmployee = () => {
  console.log(`
    =================
    Add a new employee!
    =================
  `);

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Please choose employee's role.",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the employee's name!");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log("Please enter the ID of the employee!");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter the employee's email address!");
            return false;
        }
      }
    },
    {
      type:'input',
      name:'GitHub',
      message:"What is the engineer's GitHub username?",
      when: (input) => input.role === "Engineer",
      validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log("Please enter the engineer's GitHub username!");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log("Please enter the intern's school!");
            return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add a new employee?',
      default: false
    }
  ])
  .then(employeeData => {
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
    } else {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }
    employees.push(employee);

    if (confirmAddEmployee) {
        return addEmployee(employees);
    } else {
        return employees;
    }
    })
}; //end of addEmployee function

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your index.html has been updated!");
        }
    })
};

createManager()
    .then(addEmployee)
    .then(employees => {
        return generateHTML(employees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        const employeeArr = generateHTML(err);
        writeFile(teamArr);
    });