var forbbiden_words = [];

const replacedLetters = (text, encrypt) => {
    text = text.toLowerCase();
    let mod_text = "";

    if (encrypt) {
        mod_text = text.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    } else {
        mod_text = text.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    }

    return mod_text;
}


function encryptText() {
    let text = document.getElementById("encrypt-text").value;
    document.getElementById("decrypt-text").value = replacedLetters(text, true);
}

function decryptText() {
    let text = document.getElementById("encrypt-text").value;
    document.getElementById("decrypt-text").value = replacedLetters(text, false);
}