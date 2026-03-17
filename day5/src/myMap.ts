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
