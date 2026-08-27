// Task 11: Using async/await with try/catch

// The Promise is handled using await.
// If the Promise is rejected, the catch block handles the error.

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return reject(new Error("Invalid duration"));
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

// Negative value is used to demonstrate error handling.
runCountdownAsync(-5);

// Output:
// Caught error: Invalid duration
