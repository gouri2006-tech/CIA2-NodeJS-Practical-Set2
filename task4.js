const start = new Date();
const end = new Date(start.getTime() + 10000);

const seconds = (end - start) / 1000;
console.log(`Seconds remaining: ${seconds}`);
