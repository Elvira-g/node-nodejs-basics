import { rename as ren } from 'node:fs';

const rename = async () => {
    const errNew = new Error('FS operation failed');
    ren('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', function(err){
        if (err) throw errNew;
    });
};

await rename();