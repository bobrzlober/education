const sum = (...args) => {
  let value = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] == "number") {
      value += args[i];
    } else {value + 0};
  }
  return value
};
console.log(sum(2, "aboba", 22));
