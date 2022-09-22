let resultEl = document.getElementById("result");
let lengthEl = document.getElementById("length");
let uppercaseEl = document.getElementById("uppercase");
let lowercaseEl = document.getElementById("lowercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");
let generateEl = document.getElementById("generate");
let clipboardEl = document.getElementById("clipboard");
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let symbols = "!@#$%^&*()_-+={[}]|:;\"'<,>.?";

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// console.log("🚀 ~ file: script.js ~ line 21 ~ randomFunc", randomFunc);

clipboardEl.addEventListener("click", () => {
  let text = resultEl.textContent;
  navigator.clipboard.writeText(text);
});

generateEl.addEventListener("click", () => {
  let lower = lowercaseEl.checked;
  let upper = uppercaseEl.checked;
  let number = numbersEl.checked;
  let symbol = symbolsEl.checked;
  let length = lengthEl.value;
  resultEl.textContent = generatePassword(lower, upper, number, symbol, length);
  clipboardEl.setAttribute("title", "Click to copy");
});

function generatePassword(lower, upper, number, symbol, length) {
  let result = "";
  let checked = [{ lower }, { upper }, { number }, { symbol }]
    .filter((e) => Object.values(e)[0] === true)
    .map((e) => Object.keys(e)[0]);
  console.log(checked);

  if (checked.length === 0) {
    return alert("Please check the Checkboxes");
  }

  function keys() {
    return checked[Math.floor(Math.random() * checked.length)];
  }
  // console.log(
  //   "🚀 ~ file: script.js ~ line 49 ~ generatePassword ~ keys()",
  //   keys()
  // );

  for (let i = 0; i < length; i++) {
    result += randomFunc[keys()]();
  }
  // console.log(
  //   "🚀 ~ file: script.js ~ line 58 ~ generatePassword ~ result",
  //   result
  // );
  return result;
}

function getRandomLower() {
  return alphabets[Math.floor(Math.random() * 26)];
}
// console.log(getRandomLower());

function getRandomUpper() {
  let alphabet = alphabets.toUpperCase();
  return alphabet[Math.floor(Math.random() * 26)];
}
// console.log(getRandomUpper());

function getRandomNumber() {
  return nums[Math.floor(Math.random() * 10)];
}
// console.log(getRandomNumber());

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * 27)];
}
// console.log(getRandomSymbol());
