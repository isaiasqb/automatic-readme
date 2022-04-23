// Creates a function that returns a license badge, license link and creates a license section
// If there is no license, return an empty string
function renderlicenseSection(license) {
  const types = {
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
  };

  if (!license) {
    return '';
  }

  return `
  ## License <a name='license'></a>
  This porjects operates under:
  The ${types[license].name}.
  ![Badge](${types[license].badge}) 

  More infomration for this license can be found [HERE](${types[license].link}) 
    `;
  }



// Geenerates the markdown for README
function generateMarkdown(data) {
  return `
  # ${data.appName}
  ---

  ${renderlicenseSection(data.appLicense)}

  ## Table of Content
  1. [Description](#descrption)
  2. [Installation](#installation)
  3. [Usage Tips](#usage)
  4. [How to Contribute](#contributing)
  10. [Questions](#questions)
  11. [Tests](#test)
  12. [Questions](#questions) 

  ## Description <a name='description'></a>
  ${data.appDescription}

 
  ## Installation Process <a name='installation'></a>
  ${data.appInstal} 
 

  ## Usage <a name='usage'></a>
  ${data.appUsage}
 

  ## How to Contribute <a name='contributing'></a>
  ${data.appContribute} 


  ## Suggested Tests <a name='test'></a>
  ${data.appTest}

  ## Questions <a name='questions'></a>

  ### Github Page
  Message me on Github: [${data.github}](https://github.com/${data.github})
  
  ### Email Adress
  Send Me an email to:
  ${data.email}
  `;
};

module.exports = generateMarkdown;
