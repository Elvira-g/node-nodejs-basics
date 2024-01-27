import { existsSync, appendFile } from 'node:fs';

const create = async () => {
    const err = new Error('The path exists.');
    if (existsSync('./src/fs/files/create.js')) {
       throw err;
    } else {
        appendFile('./src/fs/files/create.js', 'I am fresh and young', (err) => {
            if (err) throw err;
        });
    }
}
await create();