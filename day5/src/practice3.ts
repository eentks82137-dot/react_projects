/**
 * 1. 점수 합계 구하기
 */

const arrayTest = [10, 20, 30, 40];

const totalScore = arrayTest.reduce((acc, cur) => acc + cur, 0);
console.log(totalScore);

/**
 *
 */

const productScore = arrayTest.reduce((acc, cur) => acc * cur, 1);
console.log(productScore);
