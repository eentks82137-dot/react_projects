const greet = (name: string) => {
  console.log(`Hello, ${name}.`);
};

const a = greet("san"); // undefined

console.log(a);

const sum = (a: number, b: number) => a + b;
console.log(sum(3, 7));

const mul = (a: number, b: number) => {
  a * b;
};

console.log(mul(23, 4)); // undefined

const checkEven = (num: number) => {
  if (num % 2 === 0) {
    return true;
  }
};
console.log(checkEven(3)); // undefined
console.log(checkEven(4)); // true

console.log("-----------------------------------");

// 1

const calculateDiscount = (price: number, discount: number) =>
  price * (1 - discount / 100);

// 2
const applyTax = (price: number, taxRate: number) =>
  price + (price * taxRate) / 100;

// 3

const originalPrice = 10000;
const discount = 20;
const taxRate = 10;

const discountedPrice = calculateDiscount(originalPrice, discount);
const result = applyTax(discountedPrice, taxRate);

console.log(`최종 가격: ${result}`);
