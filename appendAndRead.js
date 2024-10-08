import fs from 'fs';
import path from 'path';

// Define the file path
const filePath = path.join(process.cwd(), 'log.txt');
// Content to append to the file
const content = `Log entry at ${new Date().toLocaleString()}\n`;

// Function to append to the file and read its content
function appendAndReadFile() {
  // Append content to the file
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
    } else {
      console.log('Content appended successfully.');