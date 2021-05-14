const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();
const environment = argv.environment;
const targetPath = './src/environments/environment.local.ts';
const environmentFileContent = `
export const environment = {
   production: false,
   API_URL: "${process.env.API_URL}",
   TOKEN: "${process.env.TOKEN}"
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Variables have been written to path: ${targetPath}`);
});