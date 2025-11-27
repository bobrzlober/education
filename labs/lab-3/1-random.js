const random = (min, max) => {
    if(max !== Number) {
        min = max;
        min = 0;
        
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(random(1, 8));
