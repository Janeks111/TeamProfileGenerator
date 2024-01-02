const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = []; // Array to store team members

// Function to prompt user for manager's information
const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      promptTeamMember();
    });
};

// Function to prompt user for team member's information
const promptTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose the team member's role:",
        choices: ["Engineer", "Intern", "Finish building the team"],
      },
    ])
    .then((answer) => {
      if (answer.role === "Engineer") {
        promptEngineer();
      } else if (answer.role === "Intern") {
        promptIntern();
      } else {
        generateHTML();
      }
    });
};

// Function to prompt user for engineer's information
const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      promptTeamMember();
    });
};

// Function to prompt user for intern's information
const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      promptTeamMember();
    });
};

// Function to generate HTML and write it to a file
const generateHTML = () => {
  const html = render(team);
  fs.writeFileSync(outputPath, html);
  console.log(`Team HTML generated successfully at ${outputPath}`);
};

// Start the application by prompting for the manager's information
promptManager();
