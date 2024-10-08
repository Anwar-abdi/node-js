import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

// Paths
const compressedFilePath = path.join(process.cwd(), 'compressed.gz');
const decompressedFilePath = path.join(process.cwd(), 'decompressed.txt');

// Function to decompress a file
function decompressFile() {
  const readStream = fs.createReadStream(compressedFilePath);
  const gunzip = zlib.createGunzip();
  const writeStream = fs.createWriteStream(decompressedFilePath);

  pipeline(readStream, gunzip, writeStream, (err) => {
    if (err) {
      console.error('Decompression failed:', err);
    } else {
      console.log('File decompressed successfully.');
      // Delete the compressed file
      fs.unlink(compressedFilePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Failed to delete the compressed file:', unlinkErr);
        } else {
          console.log('Compressed file deleted successfully.');
        }
      });
    }
  });
}



decompressFile();
