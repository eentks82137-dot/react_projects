// 결과를 보여줄 div
const output = document.getElementById('output');

/* ==========================================
 1. XMLHttpRequest (전통적 AJAX 방식)
 ========================================== */
const xhr = new XMLHttpRequest(); // XHR 객체 생성
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // 요청 초기화 (GET 방식, URL 지정)

// 요청 완료 시 실행되는 함수
xhr.onload = function () {
  if (xhr.status === 200) {
    // 상태 코드 200 = 성공
    const data = JSON.parse(xhr.responseText); // JSON 문자열 → JS 객체로 변환
    console.log('XMLHttpRequest 결과:', data); // 콘솔 출력
    // 화면에 일부 데이터 표시 (앞 2개)
    output.innerHTML +=
      '<h2>XMLHttpRequest 결과:</h2><pre>' +
      JSON.stringify(data.slice(0, 2), null, 2) +
      '</pre>';
  } else {
    console.error('XHR 오류:', xhr.status); // 오류 발생 시
  }
};
xhr.send(); // 실제 요청 보내기

/* ==========================================
 2. fetch (현대적 Promise 기반 AJAX)
 ========================================== */
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) // JSON 응답 처리
  .then((data) => {
    console.log('fetch 결과:', data); // 콘솔 출력
    output.innerHTML +=
      '<h2>fetch 결과:</h2><pre>' +
      JSON.stringify(data.slice(0, 2), null, 2) +
      '</pre>';
  })
  .catch((error) => console.error('fetch 오류:', error)); // 에러 처리

/* ==========================================
 3. axios (라이브러리 사용)
//왜 axios는 .then()을 한 번만 쓸까?
        //axios는 라이브러리 내부에서 응답 데이터를 자동으로 JSON 으로 변환해주는 과정을 거친다.
        //서버에서 응답이 오면 axios 가 내부적으로 파싱을 끝낸 뒤, 결과물을 data라는 속성에 담아 완성된 객체로 넘겨준다.
        //따라서 개발자는 별도의 변환 과정 없이 바로 데이터를 꺼내 쓸 수 있다.
========================================== */
axios
  .get('https://jsonplaceholder.typicode.com/users') // GET 요청
  .then((response) => {
    console.log('axios resp :', response);
    console.log('axios 결과:', response.data); // 콘솔 출력
    output.innerHTML +=
      '<h2>axios 결과:</h2><pre>' +
      JSON.stringify(response.data.slice(0, 2), null, 2) +
      '</pre>';
  })
  .catch((error) => console.error('axios 오류:', error)); // 에러 처리
