function checkTimeLeftCallback(seconds, callback) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return callback(new Error('Invalid duration'), null);
  }

  setTimeout(() => {
    callback(null, seconds);
  }, seconds * 1000);
}

checkTimeLeftCallback(2, (err, remaining) => {
  if (err) return console.error(err.message);
  console.log(`Time remaining: ${remaining}s`);
});
