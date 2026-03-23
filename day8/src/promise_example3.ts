// Promise는 한 번 결정되면 바뀌지 않는다.
const promise1 = new Promise((resolve, reject) => {
  resolve('성공으로 결정'); // 이 부분이 실행되면 Promise는 '성공' 상태로 결정되고, 이후의 reject나 resolve는 무시됨
  reject('실패로 결정'); // 이 부분은 실행되지 않음
  resolve('다시 성공으로 결정'); // 이 부분도 실행되지 않음
  console.log('Promise 내부 코드 실행'); // 이 부분은 Promise가 생성될 때 실행됨
});

promise1
  .then((message) => {
    console.log(message); // '성공으로 결정'이 출력됨
  })
  .catch((error) => {
    console.error(error); // 이 부분은 실행되지 않음
  });

// then은 항상 새로운 Promise를 반환한다. 따라서 then을 여러 번 체이닝할 수 있다.

const promise2 = new Promise((resolve) => resolve(10));

promise2
  .then((value: any) => {
    console.log('첫 번째 then:', value); // '10'이 출력됨
    return value + 5; // 이 값이 다음 then으로 전달됨
  })
  .then((value: any) => {
    console.log('두 번째 then:', value); // '15'이 출력됨
    return value * 2; // 이 값이 다음 then으로 전달됨
  })
  .then((value: any) => {
    console.log('세 번째 then:', value); // '30'이 출력됨
  })
  .catch((error) => {
    console.error('에러 발생:', error); // 이 부분은 실행되지 않음
  });

// Promise는 비동기지만 동기적으로 실행되는 부분이 있다.
const promise3 = new Promise((resolve, reject) => {
  console.log('Promise3 생성'); // 이 부분은 Promise가 생성될 때 즉시 실행됨
  resolve('Promise3 완료'); // 이 부분이 실행되면 Promise는 '완료' 상태로 결정됨
  console.log('Promise3 생성2'); // 이 부분도 Promise가 생성될 때 즉시 실행됨
});

promise3
  .then((message) => {
    console.log(message); // 'Promise3 완료'가 출력됨
  })
  .catch((error) => {
    console.error(error); // 이 부분은 실행되지 않음
  });
