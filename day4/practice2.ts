// 문제 1 greetUser 함수를 만들어 이름과 나이를 매개변수로 받아 출력

const greetUser = (name: string, age: number) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
};

greetUser("san", 20);

console.log("-----------------------------------");

// 문제 2 power 함수르 만들어 a^b을 계산하도록 구현
// b 는 기본값 2로 설정

const power = (a: number, b: number = 2) => a ** b;
console.log(power(3));

console.log("-----------------------------------");

// 문제 3 multiplyAll 함수를 만들어 여러 숫자를 받아 모두 곱한 결과를 반환하라

const multiplyAll = (...nums: number[]) => {
  let mul = 1;
  for (const num of nums) {
    mul *= num;
  }
  return mul;
};

console.log(multiplyAll(1, 23, 12513, 13456, 245, 23));
