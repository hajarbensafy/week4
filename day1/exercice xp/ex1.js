// #1.1 - Prédiction : "inside the funcOne function 3" 
funcOne(); 

// #1.2 - Avec const : Erreur (on ne peut pas réassigner une constante)

// #2.1 - Prédictions :
funcThree(); // "inside the funcThree function 0" 
funcTwo();   // Modifie a globale à 5
funcThree(); // "inside the funcThree function 5"

// #2.2 - Avec const : Erreur

// #3.1 - Prédiction :
funcFour();  // Crée window.a = "hello"
funcFive();  // "inside the funcFive function hello" 

// #4.1 - Prédiction : "inside the funcSix function test" 
funcSix();

// #4.2 - Avec const : Même comportement 

// #5.1 - Prédiction :
// "in the if block 5" 
// "outside of the if block 2" 

// #5.2 - Avec const : Même comportement que let