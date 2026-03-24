// time node test.js
// time bun test.js
const iterations = 1000;

function test() {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += i;
  }
  return sum;
}

const result = test();

console.log(`Result: ${result}`);
