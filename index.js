const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];
const generatePage = require('./src/generatePage');

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

  ])
}; //end of addEmployee function