const scores = [85, 90, 78, 92];

const [firstScore, , thirdScore] = scores;

console.log(`첫 번째 점수: ${firstScore}\n세 번째 점수: ${thirdScore}`);

const person = { name: 'Alice', age: 20, gender: 'female' };

const { name: userName, age: userAge } = person;

console.log(`이름: ${userName}\n나이: ${userAge}`);
