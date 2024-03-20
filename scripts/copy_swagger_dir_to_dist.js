const fs = require('fs');
const path = require('path');
const filePath = '../config/swagger';

const destinationDir = path.join(__dirname, '..', 'dist', 'config', 'swagger');
const sourceDir = path.join(__dirname, '..', 'config', 'swagger');
console.log(destinationDir);

// fs.readFile();

function copyDirectory(source, destination) {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  // Read the contents of the source directory
  const files = fs.readdirSync(source);

  // Iterate over each file in the source directory
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const destinationPath = path.join(destination, file);

    // Check if the current item is a file or directory
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy the directory
      copyDirectory(sourcePath, destinationPath);
    } else {
      // Copy the file
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

copyDirectory(sourceDir, destinationDir);
console.log('Directory copied successfully!');
