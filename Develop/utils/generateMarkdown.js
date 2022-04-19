// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// if (!appLicense){
//   appLicense = ''
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data}
    # ${data} $pjctLicenseBdg

    ## License 
    $pjctLicense}
    $pjctLicenseLink}
    ---

    ## Description
    ${data}
  
    ---
  
    ## Installation
    $pjctInstal} 
  
    ---
  
    ## Usage
    $pjctUsage}
  
    ---
  
    ## Contributing
    $pjctContribute} 
  
    ---
  
    ## Tests
    $pjctTest}
  
    ---

  
    ## Questions
    ### Github Page
   
    Message me on Github: [$github}](https://github.com/$github})
   
    ### Email Adress
    Send Me an email to:
    ~~~
    $email}
    ~~~
  
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README
`;
}

module.exports = generateMarkdown;
