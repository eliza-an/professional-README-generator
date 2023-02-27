const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const pquestionsArray = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Where would you like to say in your description?',
    },
    {
      type: 'input',
      name: 'contents',
      message: 'What would you like to have in your Table of Contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are there any installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for use',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please proide your list of collaborators if any',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to run your tests',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please enter your github username and link',
      },
     
  ]);



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
