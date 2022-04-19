// // TODO: Include packages needed for this application

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
const [projectName, projectFunct] = userInput;

const generateReadMe = (userName, funct) => {
  return   `
  #${pjctTitle} ${pjctLicenseBdg}
  ##Description
  ${pjctDescription} 
  ---
  ##Installation
  ${pjctInstal} 
  ---
  ##Usage
  ${pjctUsage}
  ---
  ##Contributing
  ${pjctContribute} 
  ---
  ##Tests
  ${pjctTest}
  ---
  ##License 
  ${pjctLicense}
  ---
  ##Questions
  ###Github Page
  ~~~
  Message me on Github: [${github}](https://github.com/${github})
  ~~~
  ###Email Adress
  Send Me an email to:
  ~~~
  ${email}
  ~~~

  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  `;
};

console.log(generateReadMe(projectName, projectFunct));

//END of experimental code......


