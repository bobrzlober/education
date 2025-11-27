const characters = ("qwertyuiopasdfghjklzxcvbnm1234567890");
const generateKey = (length, characters) => {
  const base = characters.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += characters[index];
  }
  return key;
}
console.log(generateKey(24, characters));
