import { readFile} from 'node:fs';

const read = async () => {
    const errNew = new Error('FS operation failed');
    const file = readFile('./src/fs/files/fileToRead.txt','utf8', function(err, info){
        if (err) throw errNew;
        console.log(info);
    });
};

await read();