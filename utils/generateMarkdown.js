// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == null) {
    return '';
  } else {
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Testing](#testing)

  [Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License 
  This application is covered under the ${data.license} license.
  ${renderLicenseBadge(data.license)} ?? to be fixed
  

  ## Contributing
  ${data.contributing}
  

  ## Testing
  ${data.tests}
  

  ## Questions
  My Github: [${data.username}](https://github.com/${data.username}?tab=repositories)

  Email me at ${data.email} with any questions.
  `;
}

module.exports = generateMarkdown;
