const parseArgs = () => {
  for (let i = 0; i <= process.argv.slice(2).length; i += 2) {
    const name = process.argv[i].slice(2);
    const value = process.argv[i + 1];

    console.log(`${name} is ${value}`)
  }
};

parseArgs();
