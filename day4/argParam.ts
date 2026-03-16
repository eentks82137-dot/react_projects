// 매개변수 (파라미터): 라면 이름, 토핑1
function 라면끓이기(라면이름: string = "안성탕면", 토핑1: string) {
  return 라면이름 + 토핑1;
}

// 인자
console.log(라면끓이기(undefined, "달걀2개"));

// 기본 값 설명(default parameter)

const multiply = (a: number = 55, b: number = 3) => {
  return a * b;
};

console.log(multiply(4, 2));
console.log(multiply(4));
console.log(multiply());

// rest 파라미터
// rest 파라미터만 사용

const sumAll = (...nums: number[]) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

console.log(
  sumAll(1, 3, 4, 4, 6, 24234, 24, 524, 1324, 13245, 45, 345, 345, 345),
);
console.log("-----------------------------------");

// 일반 파라미터와 rest 파라미터 혼합 사용
const test = (a: any, b: any, ...args: any[]) => {
  console.log(a);
  console.log(b);
  console.log(args);
};

test(1, 2, 3, 12, 135, 13, 513, 53);
