class Bird {
    constructor() {
      console.log("I'm a bird. (Bird)"); 
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. (Flamingo)");
      super();
    }
  }
  
  const pet = new Flamingo();