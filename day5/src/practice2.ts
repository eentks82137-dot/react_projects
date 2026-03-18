const arrayTest = [45, 82, 67, 90, 58, 73];

const increasedScores = arrayTest.map((n) => n + 5);
const passedStudents = increasedScores.filter((n) => n >= 60);
const squaredScores = passedStudents.map((n) => n ** 2);

console.log(increasedScores);
console.log(passedStudents);
console.log(squaredScores);
