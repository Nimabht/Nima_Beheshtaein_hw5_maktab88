function saparators(num) {
  if (typeof num !== "number") throw new Error("Invalid input!");
  let strNum = String(num);
  if (strNum.length <= 3) return strNum;
  let isPositive = true;
  if (strNum[0] === "-") {
    isPositive = false;
    strNum = strNum.slice(1);
  }
  strNum = strNum.split("").reverse();
  for (let i = 2; i < strNum.length; i += 3) {
    strNum[i] = "," + strNum[i];
  }
  return isPositive
    ? strNum.reverse().join("")
    : ["-", ...strNum.reverse()].join("");
}
console.log(saparators(-12312444));
