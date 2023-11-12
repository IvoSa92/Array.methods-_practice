const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((names) => names.name);
console.table(`1. Get array of all names: ${allNames}`);

//2. Get array of all heights
const height = characters.map((height) => height.height);
console.table(`2. Get array of all heights: ${height}`);

//3. Get array of objects with just name and height properties
const nameHeight = characters.map((a) => `${a.name} ${a.height}`);
console.table(
  `3. Get array of objects with just name and height properties: ${nameHeight}`
);

//4. Get array of all first names
const firstNames = characters.map((person) => person.name.split(" ")[0]);
console.table(`4. Get array of all first names: ${firstNames}`);

console.log("REDUCE");
//1. Get total mass of all characters
const totalMass = characters.reduce((sum, mass) => {
  return sum + mass.mass;
}, 0);
console.log(`1. Get total mass of all characters: ${totalMass}`);

//2. Get total height of all characters
const totalHeight = characters.reduce((sum, height) => {
  return sum + height.height;
}, 0);
console.log(`2. Get total height of all characters: ${totalHeight}`);

//3. Get total number of characters by eye color
const totalEyeColors = characters.reduce((accumulator, character) => {
  const color = character.eye_color;
  if (accumulator[color]) {
    accumulator[color]++;
  } else {
    accumulator[color] = 1;
  }
  return accumulator;
}, {});

console.log(totalEyeColors);

//4. Get total number of characters in all the character names

console.log("FILTER");
//1. Get characters with mass greater than 100

const greaterHundred = characters.filter((mass) => mass.mass > 100);
console.log(greaterHundred);

//2. Get characters with height less than 200

const heightUnderTwoHundred = characters.filter(
  (height) => height.height < 200
);
console.log(heightUnderTwoHundred);

//3. Get all male characters

const male = characters.filter((sex) => sex.gender == "male");
console.log(male);

//4. Get all female characters
const female = characters.filter((sex) => sex.gender == "female");
console.log(female);

//***SORT***
//1. Sort by mass
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);

//2. Sort by height
const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);

//3. Sort by name
const sortName = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortName);

//4. Sort by gender
const sortGender = characters.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortGender);

//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every(
  (eyeColor, hasBlueEyes) => eyeColor.eye_color == "blue"
);
console.log(`1. Is there at least one male character? ${blueEyes}`);

//2. Does every character have mass more than 40?
const overFour = characters.every((mass) => mass.mass > 40);
console.log(`1. Is there at least one male character? ${overFour}`);

//3. Is every character shorter than 200?
const shorter = characters.every((short) => short.height < 200);
console.log(`1. Is there at least one male character? ${shorter}`);

//4. Is every character male?
const everyMale = characters.every((male) => male.gender == "male");
console.log(`1. Is there at least one male character? ${everyMale}`);

//***SOME***
//1. Is there at least one male character?
console.log("SOME");
const oneMale = characters.some((male) => male.gender == "male");
console.log(`1. Is there at least one male character? ${oneMale}`);

//2. Is there at least one character with blue eyes?
const oneBlue = characters.some((blue) => blue.eye_color == "blue");
console.log(`2. Is there at least one character with blue eyes?
${oneBlue}`);

//3. Is there at least one character taller than 210?
const oneTall = characters.some((tall) => tall.height > 210);
console.log(`3. Is there at least one character taller than 210?
${oneTall}`);

//4. Is there at least one character that has mass less than 50?
const oneLess = characters.some((less) => less.mass < 50);
console.log(`4. Is there at least one character that has mass less than 50?
${oneLess}`);
