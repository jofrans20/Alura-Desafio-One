function criptografar() {
    const input = document.querySelector(".area-de-texto").value.toLowerCase();
    let criptografar_string = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".imprime-texto").value = criptografar_string;
    updateDecodificador();
}

function descriptografar() {
    const input = document.querySelector(".area-de-texto").value.toLowerCase();
    let descriptografar_string = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector(".imprime-texto").value = descriptografar_string;
    updateDecodificador();
}

async function copiar() {
    let content = document.querySelector(".imprime-texto").value;
    await navigator.clipboard.writeText(content);
}

function updateDecodificador() {
    const input = document.querySelector("#input-text").value.toLowerCase();
    if (!input) {
        document.querySelector("#decodificador-menu").classList.add("display-none");
        document.querySelector("#decodificador-sem-texto").classList.remove("display-none");
    }
    else {
        document.querySelector("#decodificador-menu").classList.remove("display-none");
        document.querySelector("#decodificador-sem-texto").classList.add("display-none");
    }
}