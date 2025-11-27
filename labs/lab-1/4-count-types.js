const ARRAY = ["object", 12, false, 21, 'csgo', 52, null, false, 'true', 'dota', Math, console, "92"];
const typeCounter = {};
for(const element of ARRAY) {
  const elementType = typeof element;
  if (typeCounter[elementType]) {
    typeCounter[elementType] += 1;
  } else {
    typeCounter[elementType] = 1;
  }
};
console.log(typeCounter);