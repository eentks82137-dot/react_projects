// 객체

interface Person {
  id: number;
  name: string;
  isStudent: boolean;
  hobbies: string[];
  student?: string;
}

// 서로 다른 데이터 저장 시 사용
const user: Person = {
  id: 1,
  name: "san",
  isStudent: true,
  hobbies: ["독서", "운동"],
};

// API 응답 데이터
const students = [
  {
    name: "이름1",
    score: 80,
  },
  {
    name: "이름2",
    score: 70,
  },
  {
    name: "이름3",
    score: 30,
  },
  {
    name: "이름4",
    score: 50,
  },
];

// new Object() 방식으로 객체 선언

const car = new Object();
// car.brand = "현대";

// 중첩 객체 및 배열

const classroom = {
  className: "405호",
  students: students,
};

if (classroom.students[0] !== undefined) {
  console.log(classroom.students[0]);
  console.log(classroom.students[0].name);
  console.log(classroom.students[0].score);
}

console.log("-----------------------------------");

// 객체 주요 메소드
// 1) Object.heys()
const keys = Object.keys(user);
console.log(keys);

console.log("-----------------------------------");

// 2) Object.values()
const values = Object.values(user);
console.log(values);

console.log("-----------------------------------");

// 3) Object.entries()

const entries = Object.entries(user);
console.log(entries);

console.log("-----------------------------------");

const doosan: Person = {
  id: 2,
  name: "Doosan",
  isStudent: true,
  hobbies: ["독서", "음악감상"],
};

console.log(Object.keys(doosan));
console.log(Object.values(doosan));
console.log(Object.entries(doosan));
console.log(doosan);

doosan.student = "student";

console.log(doosan.student);
