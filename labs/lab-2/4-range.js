const range = (start, end) => {
    const length = end - start;
    if (length < 0) return [null];
    const arr = new Array(length);
    let i = 0;
    for (let n = start; n <= end; n++) {
        arr[i++] = n;
    }
    return arr;
};
console.log(range);
