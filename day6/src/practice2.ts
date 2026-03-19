const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { c: 3, d: 24, e: { f: 5, g: 6 } };

console.log({ ...obj1, ...obj2 }); // { a: 1, b: { c: 2 }, c: 3, d: 24, e: { f: 5, g: 6 } }

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]);

const obj3 = { d: { e: 5, f: 6 } };
const obj4 = { g: { h: 7, i: 8 } };

const obj5 = { ...obj3, ...obj4 };

obj5.d.e = 100; // obj5.d는 obj3.d와 같은 참조를 가리키므로, obj3에도 영향이 있음
obj5.g.i = 200; // obj5.g는 obj4.g와 같은 참조를 가리키므로, obj4에도 영향이 있음

console.log(obj3); // { d: { e: 100, f: 6 } }
console.log(obj4); // { g: { h: 7, i: 200 } }

const deepCopyObj = JSON.parse(JSON.stringify(obj3)); // 깊은 복사: obj3을 JSON 문자열로 변환한 후, 다시 객체로 파싱하여 deepCopyObj에 할당

deepCopyObj.d.e = 300; // deepCopyObj.d는 obj3.d와 다른 객체이므로, obj3에는 영향이 없음

console.log(obj3);
console.log(deepCopyObj);

const fruits = ['apple', 'banana', 'cherry'];
fruits.push('mango');

const scores = [90, 80, 70];

const newScores = scores.map((score) => score + 10);

console.log(newScores);

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

const passed = students.filter((e) => e.score >= 80);
console.log(passed);
