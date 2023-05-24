"use strict";
const inputValue = document.getElementById("input");
const btnDictionary = document.querySelector(".btn--dictionary");
const btnGoogle = document.querySelector(".btn--google");
const btnYou = document.querySelector(".btn--you");

btnDictionary.addEventListener("click", () => {
  console.log("dictionary");
});

btnGoogle.addEventListener("click", () => {
  console.log("google");
});

btnYou.addEventListener("click", () => {
  you();
});

const dictionary = () => {
  const refUrl = "https://dictionary.cambridge.org/dictionary/english/";
  const urlConcat = refUrl.concat(inputValue.value);
  window.open(urlConcat, "_blank");
  console.log(inputValue.value);
};

const you = () => {
  const refUrl = `https://you.com/search?q=${inputValue.value}&fromSearchBar=true&tbm=youchat`;
  window.open(refUrl, "_blank");
};
