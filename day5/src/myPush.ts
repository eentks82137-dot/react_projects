const students = ['학생1', '학생2'];
students.push('학생3');
const newStudentes = students.push('학생4');
console.log(students);
console.log(newStudentes); // 새로운 변수에 push를 하게 되면 길이만 결과 값으로 나옴

// 새 데이터를 배열 끝에 추가하고 싶을 때

// 여러 요소를 한번에 추가
const colors = ['red', 'green'];
colors.push('pink', 'black');
console.log(colors);

// 반복문
const nums = [];
for (let i = 1; i <= 5; i++) {
  nums.push(i);
}

console.log(nums);

console.log('-----------------------------------');

// concat

const arr = [1, 2, 3, 4];
const newArr = arr.concat(5, 6, 7);
console.log(arr);
console.log(newArr);

console.log('-----------------------------------');

const fruits = [];
fruits.push('사과', '바나나', '오렌지', '포도');
console.log(fruits);

console.log('-----------------------------------');

const scores: number[] = [];
const newScores = scores.concat(88, 92, 79, 85);
console.log(scores);
console.log(newScores);
