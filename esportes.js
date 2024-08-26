document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var query = document.getElementById("search-input").value.toLowerCase();

    if (query.includes("volei")) {
        window.location.href = "volei.html"; // Redireciona para a página de esportes
    } else if (query.includes("judo")) {
        window.location.href = "judo.html"; // Redireciona para a página de notícias
    } else {
        alert("Nenhuma página correspondente encontrada.");
    }
});
