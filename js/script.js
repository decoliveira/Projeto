// Seleciona o elemento de entrada de texto
var textInput = document.querySelector("#input-texto");

// Seleciona o elemento de saída de texto
var outputText = document.querySelector("#output-texto");

// Seleciona o elemento de imagem de saída
var outputImg = document.querySelector("#output-img");

// Seleciona o botão de cópia
var copiarBtn = document.querySelector("#copiar");

// Mapeamento bidirecional para criptografar e descriptografar
var criptoMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Mapeamento reverso para descriptografar
var reverseMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

// Função para atualizar a saída
function updateOutput(text) {
    outputText.value = text;
    if (text.trim() === "") {
        // Oculta elementos de saída quando não há texto
        outputImg.style.display = "block";
        copiarBtn.style.display = "none"; // Oculta o botão quando não há texto de saída
        outputText.style.display = "none";
        document.querySelector('.subtitulo').style.display = 'block'; // Exibe o subtítulo
        document.querySelector('h2').style.display = 'block'; // Exibe o h2
    } else {
        // Exibe elementos de saída quando há texto
        outputImg.style.display = "none";
        copiarBtn.style.display = "block"; // Exibe o botão quando há texto de saída
        outputText.style.display = "block";
        document.querySelector('.subtitulo').style.display = 'none'; // Oculta o subtítulo
        document.querySelector('h2').style.display = 'none'; // Oculta o h2
    }
}

// Função para criptografar o texto
function criptografar() {
    var texto = textInput.value;
    var resultCripto = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (criptoMap[char]) {
            resultCripto += criptoMap[char];
        } else {
            resultCripto += char;
        }
    }
    updateOutput(resultCripto);
}

// Função para descriptografar o texto
function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    updateOutput(resultDescripto);
}

// Função para copiar o texto
function copiar() {
    outputText.select();
    document.execCommand('copy'); // Executa o comando de cópia
    textInput.value = outputText.value; // Preenche o campo de entrada com o texto da saída
    document.getElementById("mensagem-copiado").style.display = "block"; // Exibe a mensagem "Texto copiado!"
    setTimeout(function() {
        document.getElementById("mensagem-copiado").style.display = "none"; // Oculta a mensagem após 1 segundo
        updateOutput(""); // Redefine a saída para o estado inicial
    }, 1000); // Diminui o tempo para 1 segundo
}

// Oculta o botão "Copiar" no carregamento inicial
document.addEventListener("DOMContentLoaded", function() {
    copiarBtn.style.display = "none";
});
