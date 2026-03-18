const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);

console.log(nums);
console.log(doubled);

const nums2 = [10, 20, 309];

const nums3 = nums2.map((n) => n * 3);
console.log(nums3);

const names = ['kim', 'lee'];
const capName = names.map((s) => s.toUpperCase());
console.log(capName);

const caps = ['ASD', 'ASDEGW', 'GERASEDF', 'FQGRE', 'ASDB'];
const lows = caps.map((n) => n.toLowerCase());
console.log(lows);

const users = [
  { name: 'name11', age: 221 },
  { name: 'name12', age: 222 },
  { name: 'name13', age: 223 },
  { name: 'name14', age: 224 },
  { name: 'name15', age: 225 },
];

const ages = users.map((n) => n.age);

console.log(ages);

interface Car {
  brand: string;
  year: number;
  type: string;
}

const cars: Car[] = [
  {
    brand: '현대',
    year: 23,
    type: '아반떼',
  },
  {
    brand: '현대',
    year: 24,
    type: '아반떼',
  },
  {
    brand: '현대',
    year: 25,
    type: '아반떼',
  },
  {
    brand: '현대',
    year: 26,
    type: '아반떼',
  },
];
const years = cars.map((n) => n.year);
console.log(years);

// map은 원본 유지가 원칙이지만 요소가 객체라면 내부 속성은 수정될 수 있다
const students = [{ score: 90 }, { score: 80 }];
students.map((s) => (s.score += 10));
console.log(students);
