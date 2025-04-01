function kgToGrams(kg) {
    return kg * 1000;
  }
  console.log(kgToGrams(2));
 
  const kgToGramsExpr = function(kg) {
    return kg * 1000;
  };
 
  const kgToGramsArrow = kg => kg * 1000;