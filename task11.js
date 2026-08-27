function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      return reject(new Error('Duration cannot be negative'));
    }

    setTimeout(() => resolve(seconds), seconds * 1000);
  });
}

async function runCountdownAsync(seconds) {
  try {
    const remaining = await checkTimeLeftPromise(seconds);
    console.log(`Time remaining: ${remaining}s`);
  } catch (error) {
    console.log(`Caught error: ${error.message}`);
  }
}

runCountdownAsync(-5);
