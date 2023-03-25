function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}

// Função de máscara de telefone
function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

// Adicionar evento de input ao campo de telefone
const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('tel').value;
    let mensagem = document.getElementById('msg').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581981960204'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');

    nome = document.getElementById('input-nome').value = '';
    email = document.getElementById('input-email').value = '';
    telefone = document.getElementById('input-tel').value = '';
    mensagem = document.getElementById('input-msg').value = '';
}
    
