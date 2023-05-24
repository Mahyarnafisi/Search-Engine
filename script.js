"use strict";

//! deceleration variables--------------------------------------//
const inputValue = document.getElementById("input");
const btnDictionary = document.querySelector(".btn--dictionary");
const btnGoogle = document.querySelector(".btn--google");
const btnYou = document.querySelector(".btn--you");
const elementModalMsg = document.querySelector(".modal-msg");

// !Btns event listener section--------------------------------//
btnDictionary.addEventListener("click", () => {
  if (inputValue.value.length === 0) {
    modalMsg();
  } else {
    dictionary();
  }
});

btnGoogle.addEventListener("click", () => {
  Google();
});

btnYou.addEventListener("click", () => {
  you();
});

// !call back functions section -----------------------------//

const modalMsg = () => {
  elementModalMsg.classList.replace("no-display", "display");
  setTimeout(() => {
    elementModalMsg.classList.replace("display", "no-display");
  }, 1999);
};

//
const dictionary = () => {
  const refUrl = "https://dictionary.cambridge.org/dictionary/english/";
  const urlConcat = refUrl.concat(inputValue.value);
  window.open(urlConcat, "_blank");
  console.log(inputValue.value);
};
//
const Google = () => {
  const urlRef = `https://www.google.com/search?q=${inputValue.value}&rlz=1C1CHBF_enIR880IR880&sxsrf=APwXEdcKLqpD2TY4SNxguLuAbIIVNRq4AA%3A1684917506359&ei=As1tZLq_FZiRxc8P_MGxkAI&ved=0ahUKEwi6yMTrxo3_AhWYSPEDHfxgDCIQ4dUDCA8&uact=5&oq=hhelo&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsQIQJzIHCCMQsQIQJzIHCCMQsQIQJzIHCC4QigUQQzIHCAAQigUQQzINCC4QigUQxwEQ0QMQQzIKCC4QgAQQ1AIQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIVCC4QigUQQxCXBRDcBBDeBBDgBBgBOgcIIxCKBRAnOgQIIxAnOgsILhCABBDHARDRAzoFCAAQgAQ6BQguEIAEOgoILhCKBRDUAhBDOhAILhCABBAUEIcCEMcBEK8BOggILhCABBDUAjoVCC4QigUQQxCXBRDcBBDeBBDfBBgBOg0ILhCKBRDHARCvARBDOgoIABCKBRDJAxBDSgQIQRgAUABYsARg9wRoAHABeACAAV6IAcMCkgEBNJgBAKABAcABAdoBBggBEAEYFA&sclient=gws-wiz-serp`;
  window.open(urlRef, "_blank");
};
//
const you = () => {
  const refUrl = `https://you.com/search?q=${inputValue.value}&fromSearchBar=true&tbm=youchat`;
  window.open(refUrl, "_blank");
};
