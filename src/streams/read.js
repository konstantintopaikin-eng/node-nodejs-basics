import {createReadStream} from 'node:fs'
import { once } from 'node:events';

const read = async () => {
    const stream = createReadStream('./src/streams/files/fileToRead.txt');
    stream.pipe(process.stdout);
    await once(stream, 'end');
    console.log('')
  };

await read();
