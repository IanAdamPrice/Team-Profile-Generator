# Team-Profile-Generator

## Visual Test
![Team Profile Generator Demo](https://github.com/IanAdamPrice/Team-Profile-Generator/blob/main/assets/Team-Profile-Generator.gif?raw=true)
## Description
This application uses a command line interface that takes user input and builds a team with a manager and an option to add either an engineer or an intern. The data is then generated as cards and written to index.html.

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Installation
- Download via the repository on GitHub.
- In the terminal type npm init
- THEN type npm install jest --save-dev
- THEN change the "test" property to have a value of jest in the package.json file
- THEN type npm install inquirer

## Usage 
- Open terminal in the root directory.
- Type 'node index.js'
- Answer the questions.
- After completing all the questions the index.html file will be created with your data.

## Addition Information
- GitHub: [ianadamprice](https://github.com/ianadamprice)
- Email: Ianadamprice@gmail.com
