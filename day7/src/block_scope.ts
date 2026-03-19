for (let i = 0; i < 3; i++) {}

// console.log(i); // ReferenceError: i is not defined - let은 블록 스코프이므로,
// for 루프 내부에서 선언된 i는 루프 외부에서 접근할 수 없음

let count = 10;

if (true) {
  let count = 20;
  console.log(count); // 20 - if 블록 내부에서 선언된 count는 블록 스코프이므로, 외부의 count와는 다른 변수임
}
console.log(count); // 10 - if 블록 내부에서 선언된 count는 블록 스코프이므로, 외부의 count에는 영향을 주지 않음

if (true) {
  var scoreVar = 50;
  let scoreLet = 10;
}

console.log(scoreVar); // 50 - var로 선언된 scoreVar는 함수 스코프이므로, 블록 외부에서도 접근 가능
// console.log(scoreLet); // ReferenceError: scoreLet is not defined - let으로 선언된 scoreLet는 블록 스코프이므로, 블록 외부에서 접근할 수 없음
