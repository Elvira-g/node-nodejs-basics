import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const zipFile = createReadStream('./src/zip/files/archive.gz');
    const gunzip = createGunzip();
    const file = createWriteStream('./src/zip/files/fileToCompress.txt');

    pipeline(zipFile, gunzip, file);
};

await decompress();