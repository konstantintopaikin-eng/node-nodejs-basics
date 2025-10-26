import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const write = async () => {
  const writeStream = createWriteStream('./src/streams/files/fileToWrite.txt');
  await pipeline(process.stdin, writeStream);
};

await write();