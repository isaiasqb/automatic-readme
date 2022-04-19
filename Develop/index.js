// // TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown')
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





//Experimental Code......
const userInput = process.argv.slice(2, process.argv.length);
const projectName = userInput;



fs.writeFile('../dist/project.md', generateMarkdown(projectName), err => {
  if (err) throw err;
  console.log('test read me file generated')
});

//END of experimental code......


