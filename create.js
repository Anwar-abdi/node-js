import fs from 'fs';
import path from 'path';

// Path for the source file
const sourceFilePath = path.join(process.cwd(), 'source.txt');

// Function to create the source file
function createSourceFile() {
  const content =
    'Hello Anwar.';

  fs.writeFile(sourceFilePath, content, (err) => {
    if (err) {
      console.error('Error creating the source file:', err);
    } else {
      console.log('Source file created successfully.');
    }
  });
}

// Run the function
createSourceFile();
