const letters = ['x', 'y', 'z', 'z'];

const countLoop = {};
for (const letter of letters) {
  countLoop[letter] = (countLoop[letter] || 0) + 1;
}
console.log('With loop:', countLoop);

const countReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log('With reduce:', countReduce);

