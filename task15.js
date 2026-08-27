// Task 15: Create a local CommonJS module

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return reject(new Error("Invalid duration"));
    }

    setTimeout(() => resolve(seconds), seconds * 1000);
  });
}

// Export the function so it can be used in another file.
module.exports = {
  checkTimeLeftPromise
};
