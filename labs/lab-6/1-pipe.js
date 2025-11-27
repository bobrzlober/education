const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new Error("all elements of array must be function Type")
        }
    }
    return (x) => {
        return fns.reduce((v, f) => f(v), x);
    }
}
const getName = (person) => person.name;
const upperCase = (str) => str.toUpperCase();
const addGreeting = (str) => `Guten Tag!, ${str}`;
const greetingToUser = pipe(getName, upperCase, addGreeting);
console.log(greetingToUser({ name: 'Oleksandr Tuhanskykh'}));
