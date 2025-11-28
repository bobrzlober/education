const array = [1, -5, 12, 7, 1, 4, 2, 12];

const uniqueArray = (array) => {
    const result = new Set(array);
    return Array.from(result);
}

console.log(uniqueArray(array));