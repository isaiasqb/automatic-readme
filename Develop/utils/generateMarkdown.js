// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const types = [{
    'GNU': {
      name: 'General Public License (GPL)',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3NmFlNDM5Y2QucG5nJnZlcnNpb249MDAwMCZzaWc9NDQ0MzgxMTNmN2U3NDliM2U1MGE2ZjNkNzA2YzU5NDA.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#GNU_General_Public_License_GPL'
    },
    'CDDL':{
      name: 'Common Development and Distribution License (CDDL)',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3ODk4MzExYjUucG5nJnZlcnNpb249MDAwMCZzaWc9NTEyNjA4YzM1MzFhNDk5ZGRiYTcwMTkyNjMwZTI2ZjQ.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#Common_Development_and_Distribution_License_CDDL'
    },
    'Apache': {
      name: 'Apache License',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3N2MwNGE5MDYucG5nJnZlcnNpb249MDAwMCZzaWc9ZGYwZGI5N2EwYjViOTEzOTdkOWExMjc2YjUyNGM3MTY.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#The_Apache_License'
    },
    'MIT': {
      name: 'MIT License',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3OTRhMTc1ZjEucG5nJnZlcnNpb249MDAwMCZzaWc9NmZmMDU2MWFkNjA1ZTU2NDQxNDVmZWJmOTYyYTQwNDk.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#MIT_License'
    }, 
    'Ms_PL': {
      name: 'Microsoft Public Licenses (Ms-PL)',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3ODI4M2M3MTgucG5nJnZlcnNpb249MDAwMCZzaWc9OTA3MjIxYjkzYzVhOWFjZDk0YjI3YjE4MDZmMmQxODc.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#Microsoft_Public_Licenses_Ms-PL'
    }, 
    'BSD':{
      name: 'Berkeley Software Distribution License (BSD)',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3ODVlNjg3NWUucG5nJnZlcnNpb249MDAwMCZzaWc9MzBhNWRhNTQ4NTM3Njc0MmFmMWM3OGFhODNiM2JmZWM.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#Berkeley_Software_Distribution_BSD'
    },

    'EPL': {
      name: 'Eclipse Public License (EPL)',
      badge: 'https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3OTFiMzE1ZDAucG5nJnZlcnNpb249MDAwMCZzaWc9Yzg3OTc3ZjBmNmFlMGRkYmQzMjRlN2Q1NDUxNjMwZjA.png',
      link: 'https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/#Eclipse_Public_License_EPL'
    }
  }];

  if (!license) {
    return '';
  }

//   types.map(names => {
//     if (license === types.name){
// return'title matches'
//     }
//   })


  return `
  ![Badge](${types[0].badge}) 
  More infomration for this license can be found [here](${types[0].link}) 
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
  This porjects operates under:
  The ${license}.
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.appName}
  ---
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
