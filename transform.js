import fs from 'fs';
import { Transform } from 'stream';

// Create a transform stream
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Convert chunk to uppercase
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

// Read from source, transform, and write to destination
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('transformed.txt');

readStream.pipe(transformStream).pipe(writeStream);

console.log('File has been transformed successfully from source.txt and turned it to UpperCase.');
