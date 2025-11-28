const store = (value) => {
    return () => {
        return value;
    };
};
console.log(store(1));