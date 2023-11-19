const getSentence = (str) => {
  return str.split(".").filter((item) => item !== "").length;
};

const getWords = (str) => {
  return str.split(" ").length;
};

const getLetters = (str) => {
  const signos = [
    ".",
    ",",
    ";",
    "-",
    "!",
    "?",
    ":",
    "¿",
    "¡",
    "=",
    "+",
    "*",
    "/",
    "%",
    "^",
    "&",
    "$",
    "#",
    "@",
    "~",
    "`",
    "'",
    '"',
    "[",
    "]",
    "{",
    "}",
    "(",
    ")",
    "<",
    ">",
    "_",
    "´",
  ];
  return str.split("").filter((item) => item !== " " && !signos.includes(item))
    .length;
};

const getParagraphInfo = (str) => {
  return {
    LETTERS: getLetters(str),
    WORDS: getWords(str),
    SENTENCE: getSentence(str),
  };
};

console.log(getParagraphInfo("Do. Or do not. There is no try.]"));
// returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }
