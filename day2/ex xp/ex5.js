const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const combined = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(combined);