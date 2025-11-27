const seq = (a) => (b) => (typeof b === 'number' ? a(b) : seq((i) => a(b(i))));
console.log(seq(i => i++)(i => i * 2)(i => i / 3)(i => i - 4)(7));