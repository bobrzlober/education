const array1 = [1, -5, 12, 7, 1, 4, 2, 12];
const array2 = [1, 12];
const difference = (array1, array2) => {
    const result = array1.filter(item => {
        return !array2.includes(item);
    })
    return result;
}
console.log(difference(array1, array2));