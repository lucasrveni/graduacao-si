const btnContato = document.getElementById('btn-contato');

btnContato.addEventListener('click', function(event) {
    event.preventDefault();

    const email = 'perola@dev.com';

    navigator.clipboard.writeText(email)
        .then(() => {
            btnContato.textContent = 'E-mail Copiado!';
            btnContato.style.backgroundColor = '#28a745';

            setTimeout(() => {
                btnContato.textContent = 'Entrar em Contato';
                btnContato.style.backgroundColor = '#5F468E';
            }, 2000);
        })
        .catch(err => {
            console.error('Falha ao copiar o texto: ', err);
            btnContato.textContent = 'Erro ao Copiar';
            btnContato.style.backgroundColor = '#dc3545';
        });
});
