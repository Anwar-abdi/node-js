import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

// Paths
const sourceFilePath = path.join(process.cwd(), 'source.txt');
const compressedFilePath = path.join(process.cwd(), 'compressed.gz');

// Function to compress a file
function compressFile() {
 
  if (!fs.existsSync(sourceFilePath)) {
    console.error('Source file does not exist.');
    return;
  }

  const readStream = fs.createReadStream(sourceFilePath);
  const gzip = zlib.createGzip();
  const writeStream = fs.createWriteStream(compressedFilePath);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.error('Compression failed:', err);
    } else {
      console.log('File compressed successfully.');
      // Delete the original
      fs.unlink(sourceFilePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Failed to delete the source file:', unlinkErr);
        } else {
          console.log('Source file deleted successfully.');
        }
      });
    }
  });
}

compressFile();
