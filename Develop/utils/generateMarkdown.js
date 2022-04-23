// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const types = [
    {
      name: 'GNU',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3NmFlNDM5Y2QucG5nJnZlcnNpb249MDAwMCZzaWc9NDQ0MzgxMTNmN2U3NDliM2U1MGE2ZjNkNzA2YzU5NDA.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#GNU_General_Public_License_GPL'
    }
  //   {
  //     name: 'Mozilla PL',
  //     badge: '',
  //     link: ''
  //   }, 
  //   {
  //     name: 'Apache',
  //     badge: '',
  //     link: ''
  //   }, 
  //   {
  //     name: 'MIT',
  //     badge: '',
  //     link: ''
  //   }, 
  //   {
  //     name: 'Boost Software',
  //     badge: '',
  //     link: ''
  //   }, 
  //   {
  //     name: 'Unilicense',
  //     badge: '',
  //     link: ''
  //   }
  ];

  if (!license) {
    return '';
  }
  return  `
    ${types[0].badge} 
    ${types[0].link} 
    `;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
    return `
  ## License
  This porjects operates under the:
  ${license} license.
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.appName}
  ${renderLicenseLink(data.appLicense)}
  ${renderLicenseBadge(data.appLicense)}
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
};

module.exports = generateMarkdown;
