import fs from 'fs';

// Creating a read stream from a source file
const readStream = fs.createReadStream('source.txt');

// Creating a write stream to a destination file
const writeStream = fs.createWriteStream('destination.txt');

// Piping the read stream into the write stream
readStream.pipe(writeStream);

console.log('File has been copied successfully From the source.');

