# automatic-readme

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.

This last part increases the likelihood that other developers will contribute to the success of the project.

This is an application that allows you to create a complete README file from the command line. This allows the project creator to devote more time working on the project.

---
## Built with
 * Node.js 
 * JS ES6
 * Inquirer Package

---
## Functionality

The application will be invoked inside the **develop folder** by using the following command:
~~~bash
node index.js
~~~
You can quickly and easily generate a README file by using a command-line application to generate one. The application will dynamically generate a professional README.md file from a user's input using the Inquirer package (Links to an external site.).

---
## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


.gitignore file  includes node_modules/ and .DS_Store/ so that node_modules directory isn't tracked or uploaded to GitHub. 

Repo includes a package.json with the required dependencies.

---
## Demo video 

Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

To watch the vcideo, [Click here](https://drive.google.com/file/d/1GCJ3yfQhg0vMw_ntPZI2HpQthkJYGRdQ/view)

---
## Screenshots

![command line](../automatic-readme/Develop/misc/Untitled.png)