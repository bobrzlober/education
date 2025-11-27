const rangeOdd = (start, end) => {
    if (start % 2 == 0) {
        start++;
        }
    const length = end - start;
    if (length < 0) return [null];
    const arr = new Array(length);
    let i = 0;
    for (let n = start; n <= end; n++) {
    arr[i++] = n;
    if (n % 2 !== 0) {
        n++;
        }
    }
    return arr;
  
}
console.log(rangeOdd);
