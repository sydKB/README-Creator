// This function will return text to be used in generateMarkdown, 
// which will appear in the README as a badge for the chosen license
function renderLicenseBadge(license) {
  if(license[0]  === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)`;
  } else if(license[0]  === "Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)`;
  } else if(license[0]  === "Apache License 2.0") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache2.0-yellow.svg)`;
  } else {
    return ``;
  }
}

// This function returns the link to the chosen license
function renderLicenseLink(license) {
  if(license[0]  === "MIT License") {
    return `(https://mit-license.org)`;
  } else if(license[0]  === "Unlicense") {
    return `(https://unlicense.org)`;
  } else if(license[0]  === "Apache License 2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0.html)`;
  } else {
    return ``;
  }
}

// This function generates the markdown for the README file
function generateMarkdown(data) {
  return `
  # ${data.title} [${renderLicenseBadge(data.license)}](#license)
  
  
  ## Description

  ${data.description}
  

  ## Table of Contents

  > [Installation](#installation)
  >
  > [Usage](#usage)
  >
  > [License](#license)
  >
  > [Contributing](#contributing)
  >
  > [Testing](#testing)
  >
  > [Questions](#questions)


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## License 

  This application is covered under the 
  [${data.license}]${renderLicenseLink(data.license)}.
  Click for details.


  ## Contributing

  ${data.contributing}

  
  ## Testing

  ${data.tests}

  
  ## Questions

  * My Github: [${data.username}](https://github.com/${data.username}?tab=repositories)

  * Email me at ${data.email} with any questions.
  - - -

  ## Application Tutorial Video
  ![Tutorial Video](tutorial.gif)
  `;
}

module.exports = generateMarkdown;