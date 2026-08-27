// Task 8: Callback-based checkTimeLeft function

// The callback follows the Node.js error-first convention:
// callback(error, result)

function checkTimeLeftCallback(seconds, callback) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return callback(new Error("Invalid duration"), null);
  }

  setTimeout(() => {
    callback(null, seconds);
  }, seconds * 1000);
}

checkTimeLeftCallback(2, (err, remaining) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  console.log(`Time remaining: ${remaining}s`);
});

// Output:
// Time remaining: 2s
