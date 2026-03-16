// 문제 1: 함수 선언식 sayHiDec1 을 만들어 "Hi from Declaration" 출력 후 호출하시오
console.log(`Hello`);

sayHiDec1();

function sayHiDec1() {
  console.log(`Hi from Declaration!`);
}

// 문제 2: 함수 표현식 sayHiExpr을 만들어 "Hi from Expression!" 출력 후 호출하시오

// sayHiExpr();

const sayHiExpr = () => {
  console.log(`Hi from Expression!`);
};

sayHiExpr();

console.log("-----------------------------------");

// 문제 3: 두 숫자를 받아 더한 값을 반환하는 함수 선언식과 함수 표현식을 각각 만들어 호출 후 출력

function addDec1(a: number, b: number) {
  return a + b;
}

const addExpr = (a: number, b: number) => a + b;

console.log(`Dec ${addDec1(5, 6)}, Expr ${addExpr(5, 6)}`);
