const nums = [1, 4, 6, 10, 12];

// sum of array elements

const sum = nums.reduce((prv, cur) => {
  return prv + cur;
});

console.log(sum);


// filter of array elements
const over = nums.filter((val) => {
  return val > 6;
});

console.log(over);
