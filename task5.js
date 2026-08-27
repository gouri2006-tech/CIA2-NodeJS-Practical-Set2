// Task 5: Get countdown duration from the command line
// and allow the user to cancel it using stdin.

// Example command:
// node task5.js 10

const duration = Number(process.argv[2]);

if (!Number.isFinite(duration) || duration <= 0) {
  console.log("Please enter a valid positive number.");
  process.exit(1);
}

let remaining = duration;

console.log(`Countdown started for ${duration} seconds.`);
console.log('Type "cancel" and press Enter to stop the countdown.');

const timer = setInterval(() => {
  remaining--;

  console.log(`Remaining: ${remaining}s`);

  if (remaining === 0) {
    clearInterval(timer);
    console.log("Time's up!");
    process.stdin.pause();
  }
}, 1000);

process.stdin.setEncoding("utf8");

process.stdin.on("data", input => {
  if (input.trim().toLowerCase() === "cancel") {
    clearInterval(timer);
    console.log("Countdown cancelled.");
    process.stdin.pause();
  }
});

process.stdin.resume();

// Example Output:
// Countdown started for 10 seconds.
// Type "cancel" and press Enter to stop the countdown.
// Remaining: 9s
// Remaining: 8s
// Remaining: 7s
// ...
// Time's up!

// If "cancel" is entered:
// Countdown cancelled.
