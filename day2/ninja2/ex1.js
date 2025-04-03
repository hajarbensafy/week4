const menu = [
    { type: "starter", name: "Houmous with Pita" },
    { type: "starter", name: "Vegetable Soup with Houmous peas" },
    { type: "dessert", name: "Chocolate Cake" }
  ];
  
  const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
  
  // 1
  const hasDessert = menu.some(item => item.type === "dessert");
  console.log("Has dessert:", hasDessert ? "Yes" : "No");
  
  // 2
  const allStarters = menu.every(item => item.type === "starter");
  console.log("All starters:", allStarters ? "Yes" : "No");
  
  // 3
  if (!menu.some(item => item.type === "main course")) {
    menu.push({ type: "main course", name: "Grilled Salmon" });
  }
  console.log("Updated menu:", menu);
  
  // 4
  menu.forEach(item => {
    item.vegetarian = vegetarian.some(veg => 
      item.name.toLowerCase().includes(veg.toLowerCase())
    );
  });
  console.log("Menu with vegetarian info:", menu);