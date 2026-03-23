function callbackHell() {
  setTimeout(() => {
    console.log('1단계 완료');
    setTimeout(() => {
      console.log('2단계 완료');
      setTimeout(() => {
        console.log('3단계 완료');
        setTimeout(() => {
          console.log('4단계 완료');
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

// callbackHell();

// 콜백 지옥을 해결하기 위해 Promise를 사용하여 리팩토링

function step1() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log('1단계 완료');
      resolve('1단계 완료 -> ');
    }, 500);
  });
}
function step2(prev: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log('2단계 완료');
      resolve(prev + '2단계 완료 -> ');
    }, 500);
  });
}
function step3(prev: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log('3단계 완료');
      resolve(prev + '3단계 완료');
    }, 500);
  });
}

// Promise 체이닝을 사용하여 비동기 작업을 순차적으로 처리
// step1()
//   .then(step2)
//   .then(step3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('에러 발생:', error);
//   });

// -----------------------------------------------

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('TASK: 작업 1 완료');
    }, 500);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('TASK: 작업 2 완료');
    }, 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('TASK: 작업 3 완료');
    }, 1000);
  });
}

// Promise.all을 사용하여 여러 비동기 작업을 병렬로 처리하는 예제
// Promise.all은 모든 Promise가 이행될 때까지 기다리고, 결과를 배열로 반환함

Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log('Promise.all 결과: ' + results.join(' -> '));
  })
  .catch((error) => {
    console.error('에러 발생:', error);
  });

// Promise.race를 사용하여 여러 비동기 작업 중 가장 먼저 완료된 작업의 결과를 반환하는 예제
// Promise.race는 가장 먼저 이행되거나 거부된 Promise의 결과를 반환함

Promise.race([task1(), task2(), task3()])
  .then((result) => {
    console.log('Promise.race 결과: ' + result);
  })
  .catch((error) => {
    console.error('에러 발생:', error);
  });
