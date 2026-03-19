const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, ...rest] = arr1;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 10]

// 객체에서 rest 사용

const user = { name: 'Alice', age: 30, city: 'New York', country: 'USA' };

const { name, age, ...location } = user;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(location); // { city: 'New York', country: 'USA' }
