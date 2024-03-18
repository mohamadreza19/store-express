const fs = require('fs');

const filePath = '../dist/index.js';

// fs.readFile();

const prependCode = `
// Add module alias
require('module-alias/register');
const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@': __dirname,
});`;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const lines = data.split('\n');
  // Insert the prependCode at the beginning of the content
  lines.splice(0, 0, prependCode);
  const newContent = lines.join('\n');

  // Write the modified content back to the file

  fs.writeFile(filePath, newContent, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log(
      'Module alias has been successfully added to the first line of the file.'
    );
  });
});
