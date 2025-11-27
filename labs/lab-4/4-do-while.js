const sum = (...args) => {
    if (args.legnth === 0) {
        throw 0;
    }
    let value = 0;
    do {
        value += args.shift();
    } while (args.length > 0);
    return value;
}
console.log(sum(1,2,3,4));
