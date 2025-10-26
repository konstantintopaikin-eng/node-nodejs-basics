import { pipeline } from 'node:stream/promises';

const transform = async () => {
  const reverse = new TransformStream({
    transform: (chunk, controller) => {
      const reversed = chunk.toString().split('').reverse().join('');
      controller.enqueue(reversed)
    }
  })

  pipeline(process.stdin, reverse, process.stdout)
};

await transform();
