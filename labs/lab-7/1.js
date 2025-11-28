const array = [-1, -5, 12, 7, 1, 4, 2];
const removeElement = (array, ...item) => {

    const index = array.indexOf(item);
    if (!(index == -1)) {
    array.splice(index, 1);
    }

}   
removeElement(array, -5, 2);
console.log(array);