const add = (a: number, b: number) => a + b;
console.log(add(1, 2));

console.log(`안녕 태승`);
console.log(`안녕 윤하`);
console.log(`안녕 샤리`);
console.log(`안녕 비주`);

const hello = (name: string) => {
  console.log(`안녕 ${name}`);
};

hello(`태승`);
hello(`윤하`);
hello(`샤리`);
hello(`비주`);

console.log("-----------------------------------");

const generate = (a: number, b: number, c: number) => a * b + c;
console.log(generate(3, 6, 2));
