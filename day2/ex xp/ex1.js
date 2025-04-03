const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`Le choix ${index + 1}# est ${color}.`);
});

colors.includes("Violet") ? console.log("Yeah") : console.log("No...");