
const ipToInt = (ip) => {
    const [a, b, c, d] = ip.split(".");
    const sum = (a << 24) + (b << 16) + (c << 8) + d;
    return sum
}
console.log(ipToInt("127.0.0.1"));