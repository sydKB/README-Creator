// Packages used in this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// This is an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title: '
    },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Enter description: '
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Enter installation instructions: '
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Enter usage info: '
    // },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     message: 'Enter contribution guidelines: '
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Enter testing instructions: '
    // },
    {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT License", "The Unlicense", "Apache License 2.0"],
        message: 'Select your license: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    },
];

// This function writes user data to the chosen file and throws errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.log(err) : console.log(data);
    }); 
}

// This function collects the user-prompted data and uses it to write to a file
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile(`README.md`, markdownText);
        
    });
}

// Function call for the above
init();
