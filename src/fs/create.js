import fs from 'node:fs';

const create = async () => {
  const text = 'I am fresh and young';

  fs.writeFile('./src/fs/files/fresh.txt', text, { flag: 'wx' } ,err => {
    if (err) {
      throw new Error('FS operation failed')
    } 
  })
};

await create();
