/**
 * 객체/배열 구조 분해 할당
 *
 * 1. 객체나 배열에서 필요한 값만 추출하여 변수에 할당하는 문법
 * 2. 객체 구조 분해 할당은 객체의 프로퍼티 이름과 변수 이름이 일치해야 함
 * 3. 배열 구조 분해 할당은 배열의 요소 순서에 따라 변수에 할당됨
 * 4. 기본값 설정 가능
 * 5. 중첩된 구조도 분해할 수 있음
 */

const user = {
  name: 'san',
  age: 30,
  email: 'san@example.com',
};
const { name, age, email } = user;
console.log(name, age, email);

// 템플릿 리터럴을 사용하여 변수 값 출력
const a = 10;
const b = 20;

console.log(`10 + 20 = ${a + b}`);

// 템플릿 리터럴을 사용하여 조건부 표현식 포함

console.log(`a는 ${a > 15 ? '15보다 크다' : '15보다 작거나 같다'}`);

interface Car {
  brand: string;
  model: string;
  year: number;
}

const car = {
  brand: 'Hyundai',
  model: 'Sonata',
  year: 2020,
};

const { brand, model, year }: Car = car;

console.log(
  `${brand} ${model} is ${year > 2020 ? 'a new model' : 'an old model'}`,
);
