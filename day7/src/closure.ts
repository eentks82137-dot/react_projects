const karaoke = () => {
  let remain = 60;
  return () => {
    if (remain > 0) {
      console.log(`You have ${remain} seconds left to sing!`);
      remain -= 10;
    } else {
      console.log('Your time is up!');
    }
  };
};

const sing = karaoke();
sing(); // You have 60 seconds left to sing!
sing(); // You have 50 seconds left to sing!
sing(); // You have 40 seconds left to sing!
sing(); // You have 30 seconds left to sing!
sing(); // You have 20 seconds left to sing!
sing(); // You have 10 seconds left to sing!
sing(); // Your time is up!

/**
 * Explanation:
 * The `karaoke` function initializes a variable `remain` with the value of 60.
 * It then returns an inner function that has access to the `remain` variable through closure.
 * Each time the inner function is called, it checks if there is still time left (i.e., if `remain` is greater than 0).
 * If there is time left, it logs the remaining seconds and decreases `remain` by 10.
 * If there is no time left, it logs that the time is up.
 * This demonstrates how closures allow the inner function to maintain access to the variables of its outer function even after the outer function has finished executing.
 */

/**
 * karaoke()의 내부 함수가 remain 변수에 접근할 수 있는 이유는 클로저(closure) 때문입니다.
 * 클로저는 함수가 선언된 환경을 기억하는 기능으로, 내부 함수가 외부 함수의 변수에 접근할 수 있도록 합니다.
 * 이 경우, karaoke 함수가 실행될 때 remain 변수가 생성되고, 내부 함수는 이 변수를 참조할 수 있습니다.
 * 내부 함수가 호출될 때마다 remain 변수의 값이 변경되지만, 클로저 덕분에 내부 함수는 항상 최신 값을 참조할 수 있습니다.
 * 따라서, sing 함수를 여러 번 호출할 때마다 remain 변수의 값이 감소하면서도 내부 함수가 계속해서 접근할 수 있는 것입니다.
 * 함수 실행 시 내부 변수 count를 계속 누적하고 싶지만 외부에서 직접 접근할 수 없도록 하고 싶을 때 클로저를 사용할 수 있습니다.
 *
 * 함수가 종료되어 블록 밖으로 나가더라도
 * 변수는 계속해서 존재하기 때문에, 내부 함수가 그 변수를 참조할 수 있습니다.
 */

const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    console.log(`Current count: ${count}`);
  };
};

const counter = createCounter();
counter(); // Current count: 1
counter(); // Current count: 2
counter(); // Current count: 3

// 콜백 함수에서 클로저를 활용하는 예시

const timerFunc = () => {
  let seconds = 0;

  return setInterval(() => {
    seconds += 1;
    console.log(`Timer: ${seconds} seconds`);
  }, 1000);
};

const timer = timerFunc();
// 5초 후에 타이머를 멈추는 예시
setTimeout(() => {
  clearInterval(timer);
  console.log('Timer stopped!');
}, 5000);
