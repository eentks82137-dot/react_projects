// 에러 처리를 하지 않으면 조용히 끝나기 때문에 디버깅을 할 수가 없다.

const promise1 = new Promise((resolve, reject) => {
  reject(new Error('에러 발생')); // 에러를 reject로 전달
});

// promise1.then((message) => {
//   console.log(message); // 이 부분은 실행되지 않음
// });
// // .catch()를 사용하여 에러를 처리하지 않으면, 이 Promise는 거부된 상태로 끝나지만, 에러 메시지는 콘솔에 표시되지 않는다.

// 에러 처리를 위해 .catch()를 추가
promise1
  .then((message) => {
    console.log(message); // 이 부분은 실행되지 않음
  })
  .catch((error) => {
    console.error('에러 처리:', error.message); // '에러 처리: 에러 발생'이 출력됨
  });

// Promise 생성자 안에 비동기 코드를 사용하지 말자
// - Promise 생성자 안에서는 동기적으로 실행되는 코드만 작성해야 한다.
// 비동기 코드는 Promise 내부에서 처리하는 것이 아니라, Promise를 반환하는 함수로 분리하여 작성하는 것이 좋다.

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('이것은 Promise 밖에서 처리하자');
  }, 1000);
});

promise2.then((message) => {
  console.log(`잘못된 처리 결과: ${message}`); // '이것은 Promise 밖에서 처리하자'가 출력됨
});

/**
 * 문제점 설명
 *
 * Promise 생성자 내에서는 동기적인 코드만 실행됨
 * 내부에 setTimeout과 같은 비동기 코드를 작성하면,
 * resolve 호출 시점과 then 호출 시점이 일치하지 않아 예상치 못한 결과가 발생할 수 있다.
 */

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`${ms}ms 후 실행`), ms),
  );
}
delay(1000).then((message) => {
  console.log(message); // '1000ms 후 실행'이 출력됨
});
