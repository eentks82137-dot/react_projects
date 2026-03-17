let age;
console.log(age);

age = age || 20;
console.log(age);

// 함수의 매개변수 기본 값 적용

function greet(message: string) {
  message = message || "Hello!";
  console.log(message);
}

greet("Hi");

let count = 0;
count = count || 10;
let count2 = -0;
count2 = count2 || 20;

console.log(count);
console.log(count2);
