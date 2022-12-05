function arrangementArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid input");
  let correctArr = arr.map((item) => item.split("-"));
  let rows = correctArr.length;
  let columns = correctArr[0].length;
  let result = [];
  for (let j = 0; j < columns; j++) {
    result[j] = Array();
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!result[j].includes(correctArr[i][j]))
        result[j].push(correctArr[i][j]);
    }
  }
  return result;
}

function arrangementArray2(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid input");
  arr = arr.map((item) => item.split("-"));
  return arr[0]
    .map((column, index) => arr.map((row) => row[index]))
    .map((item) => [...new Set(item)]);
}
let list = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"];
