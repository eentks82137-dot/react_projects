const scores = [80, 90, 125, 46];

console.log(scores[0]);

// 동일한 종류의 데이터를 묶어야 할 때 사용

const fruits = ["apple", "banana", "orange"];
const ags = [20.32, 43, 23];

for (const fruit of fruits) {
  console.log(fruit);
}

// 배열 생성자 사용 배열 선언
const colors = new Array("red", "green", "blue");

// 길이만 지정하여 배열 선언
const emptyArray = new Array(5);

// Array.of() 사용 배열 선언
const nums = Array.of(1, 2, 3, 4);

// Array.from() 사용 배열 선언
const str = "hello";
const chars = Array.from(str);

// 숫자 범위 배열 생성
const nums2 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(nums2);

// 빈 배열 선언 후 요소 추가
const arr: string[] = [];
arr[0] = "red";
arr[1] = "green";

const scores2 = [10, 20, 30, 40, 50, 60];

scores2.push(99);

console.log(`length: ${scores2.length}, last: ${scores2[scores2.length - 1]}`);
