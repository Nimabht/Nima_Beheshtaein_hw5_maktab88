function flatArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid input!!");
  let result = [];
  for (item of arr) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result.push(...flatArray(item));
    }
  }
  return result;
}

let list = [[10, [25, 13]], [14, 55], 2, [[[[[["a"]]]]]], false];
console.log(flatArray(list));
