import { Duplex } from 'stream';

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk}`);
    callback();
  },
  read(size) {
    this.push('Data being read.');
    this.push(null); // Signal the end of data
  },
});

// Using the duplex stream
duplexStream.write('Writing to duplex stream');
duplexStream.on('data', (chunk) => {
  console.log(`Reading from duplex stream: ${chunk}`);
});
duplexStream.end();
