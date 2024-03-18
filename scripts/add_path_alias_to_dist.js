const fs = require('fs');

const filePath = '../dist/index.js';

// fs.readFile();

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Find the position to insert the new code (after line 2)
  const lines = data.split('\n');
  const insertIndex = 2; // Line number to insert the new code
  //   const newCode = `// Your new code here\n`; // Add your new code here
  //   lines.splice(insertIndex, 0, newCode);

  // Join the modified lines back together
  const modifiedContent = lines.join('\n');

  // Write the modified content back to the file
  console.log({ modifiedContent });
  // fs.writeFile(filePath, modifiedContent, (err) => {
  //   if (err) {
  //     console.error('Error writing file:', err);
  //     return;
  //   }
  //   console.log('File edited successfully.');
  // });
});
