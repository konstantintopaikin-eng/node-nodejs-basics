import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const calculateHash = async () => { 
  const hash = createHash('sha256');
  const readStream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    
  await pipeline(readStream, hash);
    
  const result = hash.digest('hex');
  console.log(result);
};

await calculateHash();
