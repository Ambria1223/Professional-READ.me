const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter the project name: ", (project_name) => {
  rl.question("Enter a short description of the project: ", (project_description) => {
    rl.question("Enter the installation instructions: ", (installation_instructions) => {
      rl.question("Enter the usage information: ", (usage_information) => {
        rl.question("Enter the contribution guidelines: ", (contribution_guidelines) => {
          rl.question("Enter the test instructions: ", (test_instructions) => {
            rl.question("Enter your GitHub username: ", (github_username) => {
              rl.question("Enter your email address: ", (email_address) => {
            
                const readmeContent = `# ${project_name}\n\n${project_description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation\n\n${installation_instructions}\n\n## Usage\n\n${usage_information}\n\n## Contributing\n\n${contribution_guidelines}\n\n## Tests\n\n${test_instructions}\n\n## Questions\n\nIf you have any questions, please feel free to contact me:\n\n- GitHub: https://github.com/${github_username}\n- Email: ${email_address}`;
                
               
                fs.writeFile("README.md", readmeContent, (err) => {
                  if (err) throw err;
                  console.log("README.md file generated successfully!");
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});
