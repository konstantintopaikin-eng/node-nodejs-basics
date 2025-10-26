import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const source = createReadStream('./src/zip/files/archive.gz');
  const destination = createWriteStream('./src/zip/files/fileToCompress.txt');

  const unzip = createGunzip()

  pipeline(source, unzip, destination, (err) => {
    if(err) throw err
  })
};

await decompress();
