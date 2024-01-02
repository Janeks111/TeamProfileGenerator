# TeamProfileGenerator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Images

![Image](./img/Screenshot%202024-01-02%20at%2018.03.57.png)

## Description

I was given a task to write a code that generates html page for team profile generator.
The user should be able to add manager, engineer and intern information along with their respective properties such as name, id, email, github or school respectively.

The first class is an Employee parent class with the following properties and methods:

name

id

email
getRole()—returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have the following:

officeNumber

getRole()—overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have the following:

github—GitHub username

getGithub()

getRole()—overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have the following:

school

getSchool()

getRole()—overridden to return 'Intern'

When a user starts the application, they're prompted to enter the team manager's:

Name

Employee ID

Email address

Office number

When a user enters those requirements, the user is presented with a menu with the option to:

Add an engineer

Add an intern

Finish building the team

When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:

Engineer's Name

ID

Email

GitHub username

When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:

Intern’s name

ID

Email

School

When a user decides to finish building their team, they exit the application and the HTML is generated.

## Installation

Download to your local repository and in terminal enter npm install

## Usage

You can use it to create professionall README.md file for your project just by ansvering some simple questions in terminal.

## License

![License Badge](https://img.shields.io/badge/License-MIT-brightgreen)

This project is licensed under the MIT license.

## Contributing

n/a

## Tests

Using terminal

## Questions

If you have any questions, feel free to contact me:

- GitHub: [Janeks111](https://github.com/Janeks111)
- Email: dusttodust94@icloud.com
