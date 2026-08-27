// Task 9: Countdown using setInterval()
// and a separate setTimeout() for the final notification.

const duration = 5;
let remaining = duration;

const intervalId = setInterval(() => {
  remaining--;

  console.log(`Remaining: ${remaining}s`);

  if (remaining === 0) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(() => {
  console.log("Time's up!");
}, duration * 1000);

// Output:
// Remaining: 4s
// Remaining: 3s
// Remaining: 2s
// Remaining: 1s
// Remaining: 0s
// Time's up!
