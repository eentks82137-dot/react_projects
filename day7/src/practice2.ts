const showData = () => {
  const data = 10;
  console.log(data);
};

showData(); // 10

var var1 = 10;
let let1 = 20;

if (true) {
  var1 = 30; // var1은 함수 스코프이므로, if 블록 내부에서 var1을 수정하면, 외부에서도 영향을 받음
  let let1 = 30; // let1은 블록 스코프이므로, if 블록 내부에서 let1을 수정해도, 외부에서는 영향을 받지 않음
  console.log(`var1: ${var1}, let1: ${let1} - inside if block`);
}

console.log(`var1: ${var1}, let1: ${let1} - outside if block`);
