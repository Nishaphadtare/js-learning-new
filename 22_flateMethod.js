

const nestedArray = [1, [2, 3], [4, [5 , 6]]];
const flatArray = nestedArray.flat();
console.log(flatArray);

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const flatDeepth2 = deeplyNestedArray.flat(2);
console.log(flatDeepth2);

const arrayEmpty = [1, , , 4];
const arrayEmptyHoles = arrayEmpty.flat();
console.log(arrayEmptyHoles);