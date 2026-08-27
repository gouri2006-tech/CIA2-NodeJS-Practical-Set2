// Task 15: Import and use the local CommonJS module

// The function is imported from countdownModule.js
// using require().

const { checkTimeLeftPromise } = require("./countdownModule");

checkTimeLeftPromise(2)
  .then(seconds => {
    console.log(`Time remaining: ${seconds}s`);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

// Output:
// Time remaining: 2s
