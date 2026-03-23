// 가장 기본적인 Promise 예제

/**
 * Promise는 비동기 작업을 처리하기 위한 객체.
 * Promise는 세 가지 상태를 가질 수 있음:
 * 1. 대기(pending): 초기 상태, 아직 완료되지 않음.
 * 2. 이행(fulfilled): 작업이 성공적으로 완료됨.
 * 3. 거부(rejected): 작업이 실패함.
 *
 * Promise는 비동기 작업이 완료된 후에 결과를 처리할 수 있도록 도와줌.
 * 1. resolve: 작업이 성공적으로 완료되었을 때 호출되는 함수.
 * 2. reject: 작업이 실패했을 때 호출되는 함수.
 *
 */

const myPromise = new Promise((resolve, reject) => {
  console.log('비동기 작업 시작...');
  // 비동기 작업을 시뮬레이션하기 위해 setTimeout 사용
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve('작업이 성공적으로 완료되었습니다.');
    } else {
      reject('작업이 실패했습니다.');
    }
  }, 1000);
});

myPromise
  .then((message) => {
    // resolve가 호출되면 then 블록이 실행됨
    console.log(message);
  })
  .catch((error) => {
    // reject가 호출되면 catch 블록이 실행됨
    console.error(error);
  })
  .finally(() => {
    // 작업이 완료된 후에 항상 실행되는 블록
    console.log('비동기 작업이 완료되었습니다.');
  });
