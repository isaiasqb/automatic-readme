// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// if (!appLicense){
//   appLicense = ''
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.appName}

    ## License 
    ${data.appLicense}
    $pjctLicenseBdg
    $pjctLicenseLink}

    ## Description
    ${data.appDescription}
  
   
  
    ## Installation
    ${data.appInstal} 
  
    
  
    ## Usage
    ${data.appUsage}

  
    ## Contributing
    ${data.appContribute} 
  
  
    ## Tests
    ${data.appTest}
 
    ## Questions
    ### Github Page
   
    Message me on Github: [${data.github}](https://github.com/${data.github})
   
    ### Email Adress
    Send Me an email to:
    ${data.email}


`;
}

module.exports = generateMarkdown;
