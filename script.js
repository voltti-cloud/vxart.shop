console.log("vxart.shop carregado com sucesso!");

// Futura lógica de carrinho ou portfólio dinâmico
const botoes = document.querySelectorAll('button');
botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Redirecionando para o WhatsApp do VXART...');
    });
});
