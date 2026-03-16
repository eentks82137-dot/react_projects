const greet = (name: string) => {
  console.log(`Hello, ${name}.`);
};

const a = greet("san"); // undefined

console.log(a);

const sum = (a: number, b: number) => a + b;
console.log(sum(3, 7));
