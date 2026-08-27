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
