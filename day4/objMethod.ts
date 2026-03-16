// 파라미터가 없는 객체 메소드

const person = {
  name: "이름",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

// 파라미터가 있는ㄴ 객체 메소드

const person2 = {
  name: "이름2",
  greet2: function (age: number) {
    console.log(`Hello my name is ${this.name}. im ${age} years old`);
  },
};

person2.greet2(20);
