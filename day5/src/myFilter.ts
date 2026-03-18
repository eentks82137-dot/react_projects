const nums = [1, 2, 3, 4];
// value만사용
const even = nums.filter((n) => n % 2 === 0);
console.log(even);

// value , index 사용
const res = nums.filter((value, index) => index % 2 === 1);
console.log(res);

// value, index, array 사용
const average = nums.reduce((sum, v) => sum + v, 0);
const aboveAverage = nums.filter((v, i, a) => v >= average || i > 2);
console.log(aboveAverage);

// 객체 배열에서 filter 사용

const users = [
  { name: '이름1', age: 19 },
  { name: '이름2', age: 23 },
  { name: '이름3', age: 15 },
  { name: '이름4', age: 25 },
];
const adult = users.filter((n) => n.age >= 20);
console.log(adult);

const names = ['kim', 'lee', 'park'];

const ee = names.filter((e) => e.includes('ee'));
console.log(ee);

/**
 * filter 주의점
 *
 * 1. 반환값이 반드시 boolean 형태이다
 * map처럼 어떤 값이든 반환해도 되지만 filter는 true/false를 가려내는 게 중요한 목적이다
 *
 * 2. 원본 배열은 바뀌지 않지만, 요소가 객체라면 내부 속성은 바뀔 수 있다
 *
 * 3. 조건을 만족하는 요소가 없으면 빈 배열을 반환한다.
 */
