const seconds = 5;
let remaining = seconds;

const intervalId = setInterval(() => {
  remaining -= 1;
  console.log(`Remaining: ${remaining}s`);

  if (remaining === 0) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(() => {
  console.log("Time's up!");
}, seconds * 1000);
