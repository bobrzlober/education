const sum = (...args) => {
    let value = 0;
    while (args.length>0) {
        value += args.shift();
    }
    return value;
}
console.log(sum(2,3,4,));