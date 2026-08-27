const duration = Number(process.argv[2]);

if (!Number.isFinite(duration) || duration <= 0) {
  console.log('Usage: node task5.js <positive-seconds>');
  process.exit(1);
}

let remaining = duration;

console.log(`Countdown started: ${remaining}s`);
console.log("Type 'cancel' and press Enter to stop.");

const timer = setInterval(() => {
  remaining -= 1;
  console.log(`Remaining: ${remaining}s`);

  if (remaining === 0) {
    clearInterval(timer);
    console.log("Time's up!");
    process.stdin.pause();
  }
}, 1000);

process.stdin.setEncoding('utf8');

process.stdin.on('data', input => {
  if (input.trim().toLowerCase() === 'cancel') {
    clearInterval(timer);
    console.log('Countdown cancelled.');
    process.stdin.pause();
  }
});

process.stdin.resume();
