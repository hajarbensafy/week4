const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const position = index + 1;
  const suffix = position <= 3 ? ordinal[position] : ordinal[0];
  console.log(`Le ${position}${suffix} choix est ${color}.`);
});