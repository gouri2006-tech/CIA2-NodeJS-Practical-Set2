// Task 13: Demonstrating the Node.js Event Loop

// Predicted output:
// 1: synchronous
// 2: Promise.then
// 3: setTimeout

console.log("1: synchronous");

setTimeout(() => {
  console.log("3: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("2: Promise.then");
});

// Actual Output:
// 1: synchronous
// 2: Promise.then
// 3: setTimeout

// Reason:
// Synchronous code runs first.
// Promise callbacks are placed in the microtask queue,
// which runs before the timer callback.
// Therefore Promise.then executes before setTimeout.
