const counter = {
  count: 0,
  increasse: function () {
    console.log(`객체 메소드 this: ${this.count}`);

    // // 일반 함수 콜백
    // setTimeout(function () {
    //   console.log(`콜백 일반 함수 this: ${this.count}`);
    // }, 500);

    setTimeout(() => {
      console.log(`콜백 화살표 함수 this: ${this.count}`);
      this.count++;
      console.log(`count : ${this.count}`);
    });
  },
};

counter.increasse();
