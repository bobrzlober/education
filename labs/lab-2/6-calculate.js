const square = (x) => {
  let result = x*x;
  return result;
};

const cube = (x) => {
  let result = x*x*x;
  return result;
}

const average = (a, b) => {
  let result = (a + b) / 2;
  return result
}

const calculate = (start, end) => {   
  let length = end - start;
  if (length < 0) {
    console.log("cant calculate")
  }
  let result = 0;
  for(let n = start; n <= end; n++) {
    result = average(square(n), cube(n));
  }
  return result;
}
console.log(square(2), cube(3), average(2, 4), calculate(0, 9));
