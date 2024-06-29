
console.log("return the total number of spaces");
console.log("------------------------------------------------------------");

function spaceCount(str){
    let spaces = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==' ') {
            spaces++;
        }
    }
    return spaces;
}
const result = spaceCount("Revision is the mother of success")
console.log(`Given string : "Revision is the mother of success"= ${result}`);
console.log("------------------------------------------------------------");
const res = spaceCount("Javascript is the language of internet world")
console.log(`Given string : "Javascript is the language of internet world"= ${res}`);