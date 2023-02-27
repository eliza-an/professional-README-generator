const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
//const questionsArray = () =>
inquirer.prompt([
    {
      type: 'input',
      name: '#Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: '#Description',
      message: 'Where would you like to say in your description?',
    },
    {
      type: 'input',
      name: '#Contents',
      message: 'What would you like to have in your Table of Contents?',
    },
    {
      type: 'input',
      name: '#Installation',
      message: 'Are there any installation requirements?',
    },
    {
      type: 'input',
      name: '#Usage',
      message: 'Please provide instructions for use',
    },
    {
      type: 'input',
      name: '#Credits',
      message: 'Please proide your list of collaborators if any',
    },
    {
        type: 'input',
        name: '#Tests',
        message: 'Please provide examples on how to run your tests',
      },
      {
        type: 'input',
        name: '#Questions',
        message: 'Please enter your github username and link',
      },
     
  ])

  .then((response) => {
    console.log(response)
    fs.writeFile(`ReadMe.md`,JSON.stringify(response), (error)=>{
        return error
        ? CSSConditionRule.error 
        : console.log("Success")
    })

})