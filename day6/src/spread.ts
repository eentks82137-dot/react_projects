const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

const c = [1, 2];
const d = [3, 4];

const res2 = [...c, 3, ...d];
console.log(res2);

const q = [4, 5, 6];
const p = [7, 8, 9];
const r = [10];
const res3 = [...arr, ...q, ...p, ...r];
console.log(res3);

const qq = { name: 'Alice', age: 30 };

const copy = { ...qq, city: 'New York' };
console.log(copy);

// 구조분해할당과 함께 사용
const nums = [10, 20, 30, 40, 50];
const [first, ...rest] = nums;

console.log(first); // 10
console.log(rest); // [20, 30, 40, 50]

const a = (...nums: number[]) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};
console.log(a(1, 2, 3)); // 6

const s = (...args: string[]) => {
  return args.join(', ');
};
console.log(s('Hello', 'World', 'TypeScript')); // "Hello, World, TypeScript"

console.log('-----------------------------------');

// 객체에서 나머지 프로퍼티를 추출하는 예시

const person = { name: 'Alice', age: 30, city: 'New York' };

const { name, ...rest1 } = person;
console.log(name); // "Alice"
console.log(rest1); // { age: 30, city: 'New York' }

const { age, ...rest2 } = rest1;
console.log(age); // 30
console.log(rest2); // { city: 'New York' }

const { city, ...rest3 } = rest2;
console.log(city); // "New York"
console.log(rest3); // {}
