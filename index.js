let show_invalid_input = "";
let textToEncrypt = document.querySelector("#text_To_Encrypt");
// textToEncrypt.focus();//removed for now.11082022
let button_doEncrypt = document.querySelector("#do_Encrypt");
button_doEncrypt.onclick = validateCaracters;
let button_doDecrypt = document.querySelector("#do_Decrypt");
button_doDecrypt.onclick = decrypt;
let button_copyEncrypt = document.querySelector("#copy_Encrypt");
button_copyEncrypt.onclick = copyEncrypt;
