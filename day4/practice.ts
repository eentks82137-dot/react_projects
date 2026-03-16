// 문제1: 함수 선언식 sayHiDec1 을 만들어 "Hi from Declaration" 출력 후 호출하시오
console.log(`Hello`);

sayHiDec1();

function sayHiDec1() {
  console.log(`Hi from Declaration!`);
}

// 문제2: 함수 표현식 sayHiExpr을 만들어 "Hi from Expression!" 출력 후 호출하시오

// sayHiExpr();

const sayHiExpr = () => {
  console.log(`Hi from Expression!`);
};

sayHiExpr();
