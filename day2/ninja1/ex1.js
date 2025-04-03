const data = [
    { name: 'Butters', age: 3, type: 'dog' },
    { name: 'Cuty', age: 5, type: 'rabbit' },
    { name: 'Lizzy', age: 6, type: 'dog' },
    { name: 'Red', age: 1, type: 'cat' },
    { name: 'Joey', age: 3, type: 'dog' },
    { name: 'Rex', age: 10, type: 'dog' }
  ];
  
  let sumLoop = 0;
  for (const pet of data) {
    if (pet.type === 'dog') {
      sumLoop += pet.age * 7;
    }
  }
  console.log('Sum with loop:', sumLoop);
  
  const sumReduce = data.reduce((total, pet) => {
    return pet.type === 'dog' ? total + (pet.age * 7) : total;
  }, 0);
  console.log('Sum with reduce:', sumReduce);