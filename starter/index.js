const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user

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
        name: 'Contributors',
        message: 'Please provide contributors if any',
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
        type: 'list',
        name: 'License',
        message: 'Which License would you like to add to this project?',
        choices: ['Apache License 2.0', 'GNU Geneal Public License', 'MIT License','BSD 3-Clause "simplified" License', 'Mozilla Public License 2.0', 'Boost software License 1.0', 'GNU General Public Licens v2.0' , 'The Unlicense']
      },
     
     ])
 
    




.then ((response) => {
    if (response.License==='Apache License 2.0'){
    badge= '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
} else if (response.License==='GNU Geneal Public License'){
    badge ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}else if (response.License==='MIT License'){
   badge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}else if (response.License==='BSD 3-Clause "simplified" License'){
badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
}else if (response.License==='Mozilla Public License 2.0'){
    badge='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
}else if (response.License==='Boost software License 1.0'){
    badge= '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
}else if (response.License==='GNU General Public Licens v2.0'){
    badge='[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
}else if (response.License==='The Unlicense'){
    badge='[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
} else {
    console.log('Please select one of the following options!')
}   return fs.writeFile(`ReadMe.md`, `
${badge}
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

  ${response.Contributors}


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



