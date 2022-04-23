//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown')

//Creates an array of questions for user input
const askInputQuestions = () => {
return inquirer
  .prompt([
      {
        type:'input',
        name:'appName',
        message:'What is the name of your project/application?',
        validate: name => {
          if (name) {
            return true 
          } else {
            console.log("Pease enter a name for your project")
            return false
          }
        }
      },
      {
        type:'input',
        name:'appDescription',
        message:'Please provide a brief description of your application:'
      },
      {
        type:'input',
        name:'appInstal',
        message:'What are the steps required to install your project?'
      },
      {
        type:'input',
        name:'appUsage',
        message:'Provide instructions and examples for use'
      },
      {
        type:'input',
        name:'appContribute',
        message:'How can people contribute to your application?'
      },
      {
        type:'input',
        name:'appTest',
        message:'Any test to run for your application?'
      },
      {
        type:'input',
        name:'github',
        message:'What is your Github username?'
      },
      {
        type:'input',
        name:'email',
        message:'What is your email?'
      },
      {
        type:'confirm',
        name:'appIsLicense',
        message:'do you want to display a license for this project?',
        default: false
      },
      {
        type:'list',
        name:'appLicense',
        message:'What type of license do you have for this app?',
        choices: ['GNU', 'CDDL', 'Apache', 'MIT', 'Ms_PL', 'BSD', 'EPL'],
        when: ({ appIsLicense }) => {
          if (appIsLicense){
            return true
          } else {
            return false
          }
        }
      }
    ])// end of prompt
};

askInputQuestions()
  .then(info => {
    console.log(info);
    fs.writeFile('../dist/README.md', generateMarkdown(info), err => {
        if (err) throw err;
        console.log('README.md file generated. You can retreive it form the distribution folder.')
      });
  });


