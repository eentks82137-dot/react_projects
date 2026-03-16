let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) sum += i;
}

console.log(sum);

const numbers = [3, 7, 12, 17, 21, 30];

numbers.forEach((n, i) => {
  if (n === 17) return console.log(`${n}, index: ${i}`);
});

let day = 4;

switch (day) {
  case 1:
    console.log(`월요일`);
    break;
  case 2:
    console.log(`화요일`);
    break;
  case 3:
    console.log(`수요일`);
    break;
  case 4:
    console.log(`목요일`);
    break;
  case 5:
    console.log(`금요일`);
    break;
  case 6:
    console.log(`토요일`);
    break;
  case 7:
    console.log(`일요일`);
    break;

  default:
    console.log("잘못된 요일");
    break;
}

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) continue;
  if (i >= 25) break;
  console.log(`num: ${i}`);
}
