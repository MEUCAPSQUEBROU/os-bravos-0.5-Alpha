const pixButton = document.getElementById('meuBotao');
const formContainer = document.getElementById('minhaCaixa');
const form = formContainer.querySelector('form');
    
function naoSeiQueNomeColocar() {
    event.preventDefault();
        
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
        
    const qrCode = gerarQRCodeFicticio(nome, cpf, email, telefone);
    const boleto = gerarBoletoFicticio(nome, cpf, email, telefone);
        
    exibirResultado(qrCode, boleto);
        
    formContainer.style.display = 'none';
}
    
function gerarQRCodeFicticio(nome, cpf, email, telefone) {
    return `QR Code Fictício: Nome: ${nome}, CPF: ${cpf}, Email: ${email}, Telefone: ${telefone}`;
}
    
function gerarBoletoFicticio(nome, cpf, email, telefone) {
    return `Boleto Fictício: Nome: ${nome}, CPF: ${cpf}, Email: ${email}, Telefone: ${telefone}`;
}
    
function exibirResultado(qrCode, boleto) {
    // mo vontade de beber veneno, hum que dlç :D
    const resultadoDiv = document.createElement('div');
    resultadoDiv.style.position = 'fixed';
    resultadoDiv.style.top = '50%';
    resultadoDiv.style.left = '50%';
    resultadoDiv.style.transform = 'translate(-50%, -50%)';
    resultadoDiv.style.backgroundColor = 'white';
    resultadoDiv.style.padding = '20px';
    resultadoDiv.style.border = '1px solid black';
    resultadoDiv.style.zIndex = '1000';

    // QR Code
    resultadoDiv.innerHTML = `
        <h2>Pagamento Gerado</h2>
        <p>${qrCode}</p>
        <p>${boleto}</p>
        <button id="fecharResultado">Fechar</button>
    `;
        
    document.body.appendChild(resultadoDiv);
        
    // NEM ASSIM AAAAAAAAAAAAAH! ok fds
    document.getElementById('fecharResultado').addEventListener('click', function() {
        document.body.removeChild(resultadoDiv);
    });
}