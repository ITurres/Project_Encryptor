function encrypt() {
    const changeTxt = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    let textEncrypted = textToEncrypt.value.replace(
      /[aeiou]/g,
      (c) => changeTxt[c]
    );
    let show = (document.getElementById("show_Encrypt").innerHTML =
      textEncrypted);
    textToEncrypt.value = "";
    show_invalid_input = document.getElementById("if_invalid_input").innerHTML =
      "";
  }

  //OPTION-2-for-decrypt//
function decrypt() {
    let changeTxtBack = textToEncrypt.value
      .toLowerCase()
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    let show = (document.getElementById("show_Encrypt").innerHTML =
      changeTxtBack);
    textToEncrypt.value = "";
  }

  function copyEncrypt() {
    let textToCopy = document.getElementById("show_Encrypt");
    textToCopy.select();
    navigator.clipboard.writeText(textToCopy.value);
  }

  // option-1 THIS OPTION does not DECRYPT WORD INTO SHOW TEXTAREA(FIX) or use OPTION-2
// function decrypt() {
//   const changeTxt = {
//     ai: "a",
//     enter: "e",
//     imes: "i",
//     ober: "o",
//     ufat: "u",
//   };
//   let textDecrypted = textToEncrypt.value.replace(
//     /[ai][enter][imes][ober][ufat]/g,
//     (c) => changeTxt[c]
//   );
//   let show = (document.getElementById("show_Encrypt").innerHTML =
//     textDecrypted);
// }

let show_invalid_input = "";
let textToEncrypt = document.querySelector("#text_To_Encrypt");
// textToEncrypt.focus();//removed for now.11082022
let button_doEncrypt = document.querySelector("#do_Encrypt");
button_doEncrypt.onclick = validateCaracters;
let button_doDecrypt = document.querySelector("#do_Decrypt");
button_doDecrypt.onclick = decrypt;
let button_copyEncrypt = document.querySelector("#copy_Encrypt");
button_copyEncrypt.onclick = copyEncrypt;
