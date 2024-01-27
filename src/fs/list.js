import { readdir } from 'node:fs';

const list = async () => {
    const errNew = new Error('FS operation failed');
    const list = readdir('./src/fs/files', function(err, list){
        if (err) throw errNew;
        console.log(list);
    });
};

await list();