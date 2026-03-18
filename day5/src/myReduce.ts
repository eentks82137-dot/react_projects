/**
 * reduce 콜백 함수 매개변수
 *
 * 1. accumulator: 누적 값
 * 2. currentValue: 현재 처리 중인 요소
 * 3. index: 현재 요소 인덱스 (순서)
 * 4. array: 원본 배열
 * 5. initialValue: 누적 값 초기 값
 */

const nums = [10, 20, 30, 40, 50];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const sum2 = nums.reduce((acc, cur) => {
  console.log(`acc: ${acc}, cur: ${cur}`);
  const newAcc = acc + cur;
  console.log(`newAcc: ${newAcc}`);
  return newAcc;
}, 0);

const votes = [
  'a',
  'b',
  'a',
  'c',
  'b',
  'a',
  'c',
  'b',
  'a',
  'c',
  'b',
  'a',
  'c',
  'b',
  'a',
  'c',
  'b',
  'a',
];

const voteCount = votes.reduce((acc: { [key: string]: number }, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(voteCount);

// 숫자 곱 예시
const multi = nums.reduce((acc, cur) => {
  return acc * cur;
}, 1);

console.log(multi);

// 최대값 최소값

const max = nums.reduce((acc, cur) => (cur > acc! ? cur : acc), nums[0]);
const min = nums.reduce((acc, cur) => (cur < acc! ? cur : acc), nums[0]);

console.log(`Max: ${max}, Min: ${min}`);

// 원본 배열은 바뀌지 않지만 객체 참조는 바뀔 수 있음

const objs = [{ x: 1 }, { x: 2 }, { x: 3 }];

const res = objs.reduce((acc, o) => {
  o.x += 1;
  return acc + o.x;
}, 0);

console.log(res);
console.log(objs);
