const phonebook = {
    aboba: +3800968342548,
    scummer: +3800671538765
}

const findPhoneByName = (name) => phonebook[name];
console.log(findPhoneByName("aboba"));