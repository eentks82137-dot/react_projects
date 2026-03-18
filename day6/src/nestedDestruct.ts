// Nested Destructuring

type ScoreTuple = [number, [number, number], number];
type SubjectScores = {
  math: number;
  english: number;
};

type Student = {
  name: string;
  age: number;
  scores: SubjectScores;
};

type StudentPair = [Student, Student];

const scores: ScoreTuple = [80, [95, 50], 100];
const [score1, [score2, score3], score4] = scores;

console.log(score1, score2, score3, score4);

// 중첩된 객체 구조 분해 할당

const students: Student = {
  name: 'Alice',
  age: 20,
  scores: {
    math: 90,
    english: 85,
  },
};

const {
  name,
  age,
  scores: { math, english }, // scores 객체에서 math와 english 프로퍼티를 추출하여 변수에 할당
} = students;

console.log(name, age, math, english);

// 배열 객체 중첩 구조 분해 할당

const students2: StudentPair = [
  {
    name: 'Bob',
    age: 22,
    scores: {
      math: 80,
      english: 75,
    },
  },
  {
    name: 'Charlie',
    age: 21,
    scores: {
      math: 85,
      english: 90,
    },
  },
];

const [
  {
    name: name1,
    age: age1,
    scores: { math: math1, english: english1 },
  },
  {
    name: name2,
    age: age2,
    scores: { math: math2, english: english2 },
  },
] = students2;

console.log(name1, age1, math1, english1);
console.log(name2, age2, math2, english2);

const students5: StudentPair = [
  { name: 'Alice', age: 20, scores: { math: 90, english: 85 } },
  { name: 'Bob', age: 19, scores: { math: 92, english: 65 } },
];

const [
  {
    name: name3,
    age: age3,
    scores: { math: math3, english: english3 },
  },
  {
    name: name4,
    age: age4,
    scores: { math: math4, english: english4 },
  },
]: StudentPair = students5;

console.log(name3, age3, math3, english3);
console.log(name4, age4, math4, english4);

// 함수 매개변수에서 중첩된 구조 분해 할당
const intro = ({ name, age, ...args }: Student) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
  console.log(`Math: ${args.scores.math}, English: ${args.scores.english}`); // scores 객체가 args에 할당됨
};

intro(students);
