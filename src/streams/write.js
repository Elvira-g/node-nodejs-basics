import { createWriteStream } from 'fs';

const write = async () => {
    const fileUrl = new URL ('./files/fileToWrite.txt', import.meta.url)
    const file = createWriteStream(fileUrl);
    process.stdin.on('data', (chunk) => {
        file.write(chunk);
    });
    process.stdin.on('end', () => {
        file.end();
    });
};

await write();