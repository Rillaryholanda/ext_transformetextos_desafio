/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function(){
    // Botão: Letra Maiúscula
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

    // Botão: Letra Minúscula
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

    // Botão: Primeira letra Maiúscula
    window.document.querySelector("#btnPrimeira").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value.toLowerCase()
        document.querySelector("#result").innerHTML = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    })

    // Botão: Limpar
    window.document.querySelector("#btnLimpar").addEventListener("click", function(){
        document.querySelector("#input-text").value = ""; 
        document.querySelector("#result").innerHTML = "";
    });

    // Botão: copiar
    document.querySelector("#btnCopiar").addEventListener("click", function() {
        const resultText = document.querySelector("#result").value.trim(); 

        if (!resultText) {
            alert("Não há nada para copiar!");
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(resultText)
                .then(() => alert("Texto copiado!"))
                .catch(() => alert("Erro ao copiar o texto."));
        } else {
            alert("Seu navegador não suporta cópia automática.");
        }
    });


}); 