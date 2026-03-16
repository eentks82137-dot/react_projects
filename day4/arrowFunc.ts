// 일반 함수

function greet1(name: string) {
  return `Hello ${name}`;
}

// 화살표 함수

const greet2 = (name: string) => `Hello ${name}`;

const greet3 = (name: string) => {
  return `Hello ${name}`;
};

console.log(greet1("doosan"));
console.log(greet2("doosan"));
console.log(greet3("doosan"));

// 문제 1 두 숫자를 받아 더한 값을 반환하는 화살표 함수 sum을 작성하고 호출

const sum = (a: number, b: number) => a + b;
console.log(sum(1, 2));

// 문제 2

const square = (num: number) => num ** 2;

console.log(square(4));
