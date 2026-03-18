const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a, b, c);

//

const arr2 = [1, 2, 3, 4, 5];

const [d, e, , f, g] = arr2;

console.log(d, e, f, g);

//
const [x, y, z = 200] = [10, 20];

console.log(x, y, z);

//
const [p, q, r = 300] = [10, 20, 30];

console.log(p, q, r);

//

interface Person {
  name: string;
  age: number;
  city?: string;
}

// 객체 구조 분해 할당
const person: Person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
};

const { name, age, city } = person;

console.log(name, age, city);

// 기본값 설정과 변수 이름 변경

const person2: Person = {
  name: 'Bob',
  age: 30,
};

const {
  name: personName,
  age: personAge,
  city: personCity = 'Unknown',
} = person2;

console.log(personName, personAge, personCity);
