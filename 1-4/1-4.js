function caseInsensitiveSearch(sentence, sValue) {
  if (typeof sentence !== "string" || typeof sValue !== "string")
    throw new Error("Invalid input!!");
  sentence = sentence.toLowerCase();
  sValue = sValue.toLowerCase();
  return sentence
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .includes(sValue);
}
