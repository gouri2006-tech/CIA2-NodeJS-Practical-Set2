console.log('1: synchronous');

setTimeout(() => {
  console.log('3: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('2: Promise.then');
});
