// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('../Develop/utils/generateMarkdown')

// // TODO: Create an array of questions for user input
// const questions = [];
const askInputQuestions = () => {
return inquirer
  .prompt([
      {
        type:'input',
        name:'appName',
        message:'What is the name of your project/application?'
      }
    ])// end of prompt
};

askInputQuestions().then(answers => console.log(answers));


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





//Experimental Code......

// const generateReadMeFile = generateMarkdown(data);

// fs.writeFile('../dist/project.md', generateReadMeFile, err => {
//   if (err) throw err;
//   console.log('test read me file generated')
// });



//END of experimental code......


