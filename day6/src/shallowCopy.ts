// 얕은 복사 예시 (배열)
const arr1: (number | number[])[] = [1, 2, [3, 4]];
const arr2 = [...arr1]; // 얕은 복사: arr1의 요소들을 새로운 배열 arr2에 복사하지만, 중첩된 배열은 참조로 복사됨

arr2[0] = 10; // 원본에 영향 없음
(arr2[2] as number[])[0] = 30; // arr2[2]는 arr1[2]와 같은 참조를 가리키므로, 원본에도 영향이 있음

console.log(arr1); // [1, 2, [30, 4]]
console.log(arr2); // [10, 2, [30, 4]]

// 얕은 복사 예시 (객체)

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 }; // 얕은 복사: obj1의 속성들을 새로운 객체 obj2에 복사하지만, 중첩된 객체는 참조로 복사됨

obj2.a = 10; // 원본에 영향 없음
obj2.b.c = 20; // obj2.b는 obj1.b와 같은 참조를 가리키므로, 원본에도 영향이 있음

console.log(obj1); // { a: 1, b: { c: 20 } }
console.log(obj2); // { a: 10, b: { c: 20 } }
