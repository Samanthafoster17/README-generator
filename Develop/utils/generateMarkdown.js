
// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
   
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")\n

## Table of Contents:

- [Description](#description)

- [Installation](#installation)

- [License](#license) 

- [Contribution](#contribution)

- [Tests](#tests)

- [Questions](#questions) 


## Description
${response.description} 
  
## Installation 
${response.installation} 
  
## License
${response.license} 
  
## Contribution 
${response.contributions} 
  
## Tests
${response.tests} 
  
## Questions 
Please send any questions to: ${response.email}

You may view GitHub profile here: 
-[Github Profile](https://github.com/${response.github}).
`;
}

module.exports = generateMarkdown;
