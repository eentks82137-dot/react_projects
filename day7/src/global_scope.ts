let global_var = 'I am a global variable';

function printGlobalVar() {
  console.log(global_var); // 함수 내부에서 global_var에 접근 가능
}

printGlobalVar(); // 'I am a global variable'

console.log(global_var); // 함수 외부에서도 global_var에 접근 가능

function modifyGlobalVar() {
  global_var = 'I have been modified'; // global_var을 수정
}

modifyGlobalVar();

console.log(global_var); // 'I have been modified'
