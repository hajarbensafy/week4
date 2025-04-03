const startLine = '     ||<- Start line';
let turtle = 'tortue';
let rabbit = 'lapin';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

console.log("Alignement initial:");
console.log(startLine); 
console.log(turtle);   
console.log(rabbit);  

console.log("\nAprès turtle.trim().padEnd(9, '='):");
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);  
