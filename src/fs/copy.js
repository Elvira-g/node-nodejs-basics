import { mkdir, cp } from 'node:fs';

const copy = async () => {
    const errNew = new Error('FS operation failed');
    mkdir('./src/fs/files_copy', function(err){
        if (err) {
            throw errNew;
        } else {
            cp('./src/fs/files', './src/fs/files_copy', {recursive: true}, function(err){
                if (err) throw errNew;
            });
        }
    });  
};

await copy();
