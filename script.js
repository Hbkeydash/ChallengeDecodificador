// Função para encriptar a mensagem
function encryptMessage() {
    const message = document.getElementById('message').value;
    const encrypted = message
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('result').value = encrypted;
}

// Função para decriptar a mensagem
function decryptMessage() {
    const message = document.getElementById('message').value;
    const decrypted = message
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('result').value = decrypted;
}

// Função para copiar o texto criptografado/descriptografado
function copyText() {
    const resultText = document.getElementById('result').value;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}
