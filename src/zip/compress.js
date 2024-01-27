import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const fileUrl = new URL ('./files/fileToCompress.txt', import.meta.url)
    const file = createReadStream(fileUrl);
    const gzip = createGzip();
    const dest = createWriteStream('./src/zip/files/archive.gz');
    
    pipeline(file, gzip, dest);
};

await compress();