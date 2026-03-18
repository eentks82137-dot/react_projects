const score = 85;
const res = score >= 60 ? '합격' : '불합격';

console.log(res);

// 중첩된 삼항 연산자
const grade =
  score >= 90
    ? 'A'
    : score >= 80
      ? 'B'
      : score >= 70
        ? 'C'
        : score >= 60
          ? 'D'
          : 'F';

console.log(grade);

const score2 = 78;
const grade2 =
  score2 >= 90 ? 'A' : score2 >= 80 ? 'B' : score2 >= 70 ? 'C' : 'F';
console.log(grade2);

//

const gender = 'M';
const score3 = 85;

const result =
  (gender === 'M' ? '남자 ' : '여자 ') + (score3 >= 60 ? '합격' : '불합격');
console.log(result);
