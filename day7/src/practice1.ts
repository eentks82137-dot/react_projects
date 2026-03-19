let count2 = 0;

const add2 = () => {
  count2 += 1;
};

add2();
add2();
add2();

console.log(count2);

let score2 = 0;

const increaseScore2 = (points: number) => {
  score2 += points;
};

increaseScore2(5);
increaseScore2(10);
console.log(score2);
