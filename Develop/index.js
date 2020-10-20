
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your E-mail address"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter your project title"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions for your project"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose appropriate license for your project",
        choices: [
            "None",
            "MIT",
            "APACHE2.0",
            "GPL3.0",
            "BSD3"

        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "Please list any contribution guidelines for your project"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any test information for your project"
    }
];


// function to write README file

function writeToFile(readMe, response) {
    return fs.writeFileSync(readMe, response)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquireResults) => {
            writeToFile("README.md", generateMarkdown({...inquireResults}))
            console.log("Your README.md is now complete!");
        })
        .catch(function(err){
            console.log(err);
        })

}

// function call to initialize program
init();
