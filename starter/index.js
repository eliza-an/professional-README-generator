const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
//const questionsArray = () =>
inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What would you like to say in your description?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Please provide instructions for use',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please proide instructions for installation',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide examples on how to run your tests',
      },
      {
        type: 'input',
        name: 'Username',
        message: 'Please enter your github username',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Please enter your email',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Which License would you like to add to this project?',
      },
     
     ])
 
    




.then ((response) => {
    return fs.writeFile(`ReadMe.md`, `
  # ${response.Title}

  # Description

  ${response.Description}


  ## Table of Contents

  -Description (#Description)
  -Installation (#Installation)
  -Usage (#Usage)
  -Contributing (#Contributions)
  -Tests (#Tests)
  -License (#License)

  ## Installation

  ${response.Installation}


  ## Usage

  ${response.Usage}


  ## Contributing

  ${response.Credits}


  ## Tests

  ${response.Tests}


  ## License

  The license for this project is ${response.License}

  ## Questions
  Please reach out if you would like clarification on this project via my Github: github.com/${response.Username}
  or my email ${response.Email}
  `,
    (error)=>{
        return error
        ? CSSConditionRule.error 
        : console.log("Success")
    })

})