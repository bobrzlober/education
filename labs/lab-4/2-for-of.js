const sum = (...args) => {
  let value = 0;
  for (const arg of args) {
    if (typeof arg == "number") {
      value += arg;
    } else {value + 0};
  }
  return value
};
console.log(sum(2, "aboba", 23, "24"));
