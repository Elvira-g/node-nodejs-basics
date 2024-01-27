import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { Transform } from 'node:stream';
import  assert  from 'node:assert';

const calculateHash = async () => {
    const readStream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const myTransform = new Transform({
        writableObjectMode: true,
        transform(chunk, encoding, callback) {
        callback()
        },
    });

   myTransform.setEncoding('hex');

    readStream.on('data', (chunk) => {
        hash.update(chunk); 
    });

    readStream.on('end', () => {
        myTransform.push(hash.toString('hex'));
    });

    myTransform.on('data', (hash) => {
        console.log(hash);
    }); 
    
};

await calculateHash();