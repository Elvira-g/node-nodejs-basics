const transform = async () => {
    process.stdin.on('data', (chunk) => {
        process.stdout.write(chunk.toString().split("").reverse().join(""));
    });
};

await transform();