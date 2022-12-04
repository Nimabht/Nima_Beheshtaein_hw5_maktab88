function depthArray(arr) {
  let depth = 1;
  if (Array.isArray(arr)) {
    return depth + Math.max(0, ...arr.map(depthArray));
  } else return 0;
}
let testRy = [1, 2, 3, [1, [32, [5, 6, [688765]]]], 4, [3, 4], [2, 4, [4]]];
const sampleArray = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12, []];
console.log(depthArray(testRy));
console.log(depthArray(sampleArray));
