
function isAnagram(str1, str2){
    var sortStr1 = str1.split("").sort().join(" ");
    var sortStr2 = str2.split("").sort().join(" ");
    if (sortStr1==sortStr2) {
        return 'is Anagram'
    }else{
        return 'is not anagram'
    }
}
var result = isAnagram("vile", "evil");
console.log(`Given str are anagram -"vile", "evil": ${result}`);
console.log("---------------------------------------------------");
var result = isAnagram("silent", "listen");
console.log(`Given str are anagram -"silent", "listen": ${result}`);
console.log("---------------------------------------------------");

var result = isAnagram("gram", "aram");
console.log(`Given str are anagram - "gram", "aram": ${result}`);
console.log("---------------------------------------------------");

var result = isAnagram("mom", "tom");
console.log(`Given str are anagram - "mom", "tom": ${result}`);
