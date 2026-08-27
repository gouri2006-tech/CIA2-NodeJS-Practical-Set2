// Task 4: Calculate the difference between two Date objects

// Two Date objects are created and their difference
// is calculated in milliseconds and converted into seconds.

const start = new Date("2026-08-27T10:00:00");
const end = new Date("2026-08-27T10:00:10");

const seconds = (end - start) / 1000;

console.log(`Seconds remaining: ${seconds}`);

// Output:
// Seconds remaining: 10
