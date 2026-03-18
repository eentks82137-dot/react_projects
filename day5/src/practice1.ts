const arrayTest = [80, 90, 75];

// 1. 점수 추가

arrayTest.push(70, 85, 60);

// 2. 점수 변환
const increasedScores = arrayTest.map((n) => n + 5);

// 3. 점수 변환

const squaredScores = increasedScores.map((n) => n ** 2);

console.log(arrayTest);
console.log(increasedScores);
console.log(squaredScores);
