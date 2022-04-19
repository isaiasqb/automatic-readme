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
      // {
      //   type:'input',
      //   name:'appDescription',
      //   message:'Please provide a brief description of your application:'
      // },
      // {
      //   type:'input',
      //   name:'appInstal',
      //   message:'What are the steps required to install your project?'
      // },
      // {
      //   type:'input',
      //   name:'appUsage',
      //   message:'Provide instructions and examples for use'
      // },
      // {
      //   type:'input',
      //   name:'appName',
      //   message:'What is the name of your project/application?'
      // },
      // {
      //   type:'input',
      //   name:'appContribute',
      //   message:'How can people contribute to your application?'
      // },
      // {
      //   type:'input',
      //   name:'appTest',
      //   message:'Any test to run for your application?'
      // },
      // {
      //   type:'input',
      //   name:'github',
      //   message:'What is your Github username?'
      // },
      // {
      //   type:'input',
      //   name:'email',
      //   message:'What is your email?'
      // },
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
        choices: ['GNU', 'Mozilla PL', 'Apache', 'MIT', 'Boost Software', 'Unilicense'],
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

// const askLicenseInfo = () => {
//   console.log (`
//    ==================
//    You have a license
//    ==================
//   `)
//   return inquirer.prompt([
//     {
//         type:'list',
//         name:'appLicense',
//         message:'What type of license do you have for this app?',
//         choices: ['GNU', 'Mozilla PL', 'Apache', 'MIT', 'Boost Software', 'Unilicense']
//     }
//   ]);
// };



askInputQuestions()
  .then(info => {
    console.log(info)
    // if (info.appIsLicense){
    //   return askLicenseInfo()
    // } else {
    //   return
    // }
  })
  // // .then(askLicenseInfo)
  // .then(infoLicense => console.log(infoLicense));

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


