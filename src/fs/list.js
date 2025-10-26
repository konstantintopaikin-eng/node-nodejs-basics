import fs from 'node:fs'

const list = async () => {
  fs.readdir('./src/fs/files', (err, files) => {
    if (err) throw new Error('FS operation failed')

    files.forEach(file => console.log(file))
  })
};

await list();
