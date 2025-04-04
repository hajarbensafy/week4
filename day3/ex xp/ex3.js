const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2
const multipliedArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(multipliedArray);
