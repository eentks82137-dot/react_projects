const outer = {
  name: "😊 Outer Object`",

  // 일반 함수로 정의된 객체 메소드
  // 호출시 this = outer 객체

  regularFunc: function () {
    console.log(`regularFunc this: ${this.name}`);
  },

  //   // 화살표 함수로 정의된 객체 메소드
  //   // 화살표 함수는 this를 자체 생성하지 않음 -> 상위 스코프(this)사용
  //   arrowFunc: () => {
  //     console.log(`arrowFunc this : ${this.name}`);
  //   },

  // 객체 메소드 내에서 다른 함수 호출 시 this를 비교
  demo: function () {
    console.log(`demo 시작 this: ${this.name}`); // demo()를 호출한 객체 -> outer

    // // 내부 일반 함수 (콜백)
    // function innerRegular() {
    //   console.log(`innerRegular this: ${this.name}`);
    // }

    // innerRegular();

    // 내부 화살표 함수 (콜백)
    // 화살표 함수는 this를 생성하지 않고 상위 스코프 this를 그대로 사용

    const innerArrow = () => {
      console.log(`innerArrow this: ${this.name}`);
    };

    innerArrow();
  },
};

outer.regularFunc(); // outer 객체의 name에 접근
// outer.arrowFunc(); // outer 객체의 name에 접근 x

outer.demo(); // demo 메소드 내에서 화살표 함수로 this.name에 접근 가능
