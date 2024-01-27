import { unlink } from 'node:fs';

const remove = async () => {
    const errNew = new Error('FS operation failed');
    unlink('./src/fs/files/fileToRemove.txt', function(err){
        if (err) throw errNew;
    });
};

await remove();