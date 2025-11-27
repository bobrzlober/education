'use strict';

const inc = (obj) => {
  if (typeof obj === Object) {
    obj.n--;
    const obj = {n:5}
  };
  console.log(obj)
};

module.exports = { inc };