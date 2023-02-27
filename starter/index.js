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
      name: 'Credits',
      message: 'Please proide your list of collaborators if any',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide examples on how to run your tests',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your github username and link',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Which License would you like to add to this project?',
      },
     
     ])
 
    




.then ((response) => {
    return fs.writeFile(`ReadMe.md`, `
  #${response.Title}

  # Description

  ${response.Description}


  ## Table of Contents

  -Description (#Description)
  -Installation (#Installation)
  -Usage (#Usage)
  -Contributions (#Contributions)
  -Tests (#Tests)
  -License (#License)

  ## Installation

  ${response.Installation}


  ## Usage

  ${response.usage}


  ## Contributions

  ${response.Credits}


  ## Tests

  ${response.Tests}


  ## License

  The license for this project is ${response.License}
  `,
    (error)=>{
        return error
        ? CSSConditionRule.error 
        : console.log("Success")
    })

})