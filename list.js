import fs from 'fs';
import path from 'path';

// Define the directory to list files from
const directoryPath = process.cwd(); // Uses the current working directory

// Define the output file where the list will be saved
const outputFilePath = path.join(directoryPath, 'fileList.txt');

// Function to list files in the directory and save them
function listFiles() {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
