
const map = new Map();
map.set("RollNumber", 10);
map.set("city", "La");
map.set("age", 22);
map.set("RollNumber", 30);
map.set("LuckyNum", 22);
console.log(map);

console.log(map.get("city"));
console.log(map.get("LuckyNum"));

console.log(map.has("age"));// age is present or not
console.log(map.size);
console.log(map.keys());
console.log(map.values());

console.log("Traversing map");
for (const keyVal of map) {
    console.log(keyVal);
}

console.log("Traversing map");
for (const keyVal of map) {
    console.log(keyVal[0], keyVal[1]);
}