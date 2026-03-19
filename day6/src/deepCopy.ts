// Json을 활용하여 깊은 복사

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1)); // 깊은 복사: obj1을 JSON 문자열로 변환한 후, 다시 객체로 파싱하여 obj2에 할당

obj2.a = 10; // 원본에 영향 없음
obj2.b.c = 20; // obj2.b는 obj1.b와 다른 객체이므로, 원본에도 영향이 없음

console.log(obj1); // { a: 1, b: { c: 2 } }
console.log(obj2); // { a: 10, b: { c: 20 } }

// 주의: JSON을 활용한 깊은 복사는 함수, undefined, Symbol, Date 객체 등은 제대로 복사되지 않으므로, 이러한 경우에는 다른 방법을 사용해야 함
