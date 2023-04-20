var forbbiden_words = [];

function removeAccentMarks(text) {
    
    let removedAccentMarks = text.replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("á", "a")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u");
    
    
    return [removedAccentMarks, removedAccentMarks !== text];
}

const replacedLetters = (text, encrypt) => {
    text = text.toLowerCase();
    const [newText, textChanged] = removeAccentMarks(text);

    if (textChanged) {
        document.getElementById("encrypt-text").value = newText;
        text = newText;
    }


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