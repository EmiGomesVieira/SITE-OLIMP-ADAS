document.getElementById('doacaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    let quantia = document.getElementById('quantia').value;

    if (quantia === 'custom') {
        quantia = document.getElementById('customQuantia').value;
    }

    exibirMensagem(`Sua doação foi recebida, agrademos pela sua colaboração!`);

    // Limpa os campos do formulário
    limparCampos();
});

document.getElementById('quantia').addEventListener('change', function() {
    const quantiaSelecionada = this.value;
    const customQuantiaInput = document.getElementById('customQuantia');

    if (quantiaSelecionada === 'custom') {
        customQuantiaInput.style.display = 'block';
        customQuantiaInput.focus();
    } else {
        customQuantiaInput.style.display = 'none';
    }
});

function exibirMensagem(texto) {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = texto;
    mensagem.style.display = 'block';

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 3000);
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('quantia').value = '10'; // Define a quantia padrão
    document.getElementById('customQuantia').value = '';
}
