import { createReadStream } from 'fs';

const read = async () => {
    const readStream = createReadStream('./src/streams/files/fileToRead.txt');

    readStream.on('data', (stream) => {
        process.stdout.write(stream);
    });

};

await read();