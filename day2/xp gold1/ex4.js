// Partie 1 
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flattenedArray = array.flat(2);
console.log("Partie 1 - Tableau aplati:", flattenedArray); 

// Bonus
console.log("Bonus partie 1:", [[1],[2],[3],[[[4]]],[[[5]]]].flat(2)); 

// Partie 2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const joinedGreeting = greeting.map(arr => arr.join(' '));
console.log("Partie 2 - Salutations jointes:", joinedGreeting); 

const finalString = joinedGreeting.join('. ') + '.';
console.log("Partie 2 - Chaîne finale:", finalString);

// Partie 3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(Infinity);
console.log("Partie 3 - Tableau désemboîté:", untrapped);