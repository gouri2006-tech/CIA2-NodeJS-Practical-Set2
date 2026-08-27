function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return reject(new Error('Invalid duration'));
    }

    setTimeout(() => resolve(seconds), seconds * 1000);
  });
}

module.exports = { checkTimeLeftPromise };
