// The function returns a Promise.
// If the duration is invalid, the Promise is rejected.
// Otherwise, setTimeout waits for the given number of seconds
// and then resolves the Promise with the remaining time.

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return reject(new Error('Invalid duration'));
    }

    setTimeout(() => resolve(seconds), seconds * 1000);
  });
}

checkTimeLeftPromise(2)
  .then(remaining => console.log(`Time remaining: ${remaining}s`))
  .catch(err => console.error(`Error: ${err.message}`));

// Output:
// Time remaining: 2s
