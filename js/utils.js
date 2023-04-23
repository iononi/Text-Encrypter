const textField = document.getElementById("encrypt-text");
textField.addEventListener("keyup", () => {
    if (textField.value.trim() === "") {
        document.getElementById("decrypt-text").value = "";
        changeVisibility("visible");
        copyButton.style.visibility = "hidden";
    }
});

const copyButton = document.getElementById("btn-cpy");
copyButton.style.visibility = "hidden";

function removeAccentMarks(text) {
    
    let removedAccentMarks = text.replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("á", "a")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u");
    
    
    return [removedAccentMarks, removedAccentMarks !== text];
}

function copyToClipboard() {
    let text = document.getElementById("decrypt-text").value;

    if (text !== "") {
        navigator.clipboard.writeText(text);
        alert("El texto se ha copiado al portapapeles!");
    } else {
        alert("No hay nada que copiar :(")
    }
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

function changeVisibility(status) {
    const muneco = document.getElementById("muneco");
    const msg = document.getElementById("msg");
    const txt = document.getElementById("text");
    muneco.style.visibility = status;
    msg.style.visibility = status;
    txt.style.visibility = status;
}

function encryptText() {
    let text = document.getElementById("encrypt-text").value;
    // change visibility of messages
    if (text !== "") {
        changeVisibility("hidden");
        copyButton.style.visibility = "visible";       
    }
    document.getElementById("decrypt-text").value = replacedLetters(text, true);
}

function decryptText() {
    let text = document.getElementById("encrypt-text").value;
    changeVisibility("hidden");
    copyButton.style.visibility = "visible";
    document.getElementById("decrypt-text").value = replacedLetters(text, false);
}