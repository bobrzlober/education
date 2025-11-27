const phonebook = [
    {name:"aboba", phoneNumber:"+380968342548"},
    {name:"scummer", phoneNumber:"+380671538765"} 
];

const findPhoneByName = (name) => {
    for(const obj of phonebook) {
        if(obj.name === name){
            return obj.phoneNumber;
        }
    }
}
console.log(findPhoneByName("scummer"));
