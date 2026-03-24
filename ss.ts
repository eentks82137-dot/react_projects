let prop = 'foo';
let obj = {
  [prop]: 'bar',
};

console.log(obj.foo); // Output: "bar"
console.log(obj['foo']); // Output: "bar"
console.log(obj.prop); // Output: undefined
console.log(obj[prop]); // Output: "bar" because obj[prop] is equivalent to obj['foo'] which is "bar"
