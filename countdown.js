const { checkTimeLeftPromise } = require('./countdownModule');

checkTimeLeftPromise(2)
  .then(seconds => console.log(`Time remaining: ${seconds}s`))
  .catch(err => console.error(err.message));
