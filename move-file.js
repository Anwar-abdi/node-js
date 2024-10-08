import fs from 'fs';
import path from 'path';

// Define paths
const sourcePath = path.join(process.cwd(), 'source.txt');
const destDir = path.join(process.cwd(), 'new-folder');
const destPath = path.join(destDir, 'Source.txt');

// Check if the destination directory exists, if not, create it
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Move the file to the new directory
fs.rename(sourcePath, destPath, (err) => {
  if (err) throw err;
  console.log('File moved successfully to the new folder.');
});
