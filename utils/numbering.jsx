export const numbering = (number, type) => {
  const lowerRomanNumerals = ["", "i", "ii", "iii", "iv", "v", "vi"];
  const alphabets = ["",  "a", "b", "c", "d"];

  if (number < 1 || number > 11) {
    return "";
  }

  if (type === "romanNumberals") {
    return lowerRomanNumerals[number];
  } else {
    return alphabets[number];
  }
};
