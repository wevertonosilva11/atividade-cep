async function buscarCEP() {
    const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
    
    const divResultado = document.getElementById('resultado');
    const msgErro = document.getElementById('erro');

    divResultado.classList.add('hidden');
    msgErro.classList.add('hidden');

    
    if (cep.length !== 8) {
        return; 
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            msgErro.classList.remove('hidden');
        } else {
            document.getElementById('resCep').innerText = data.cep;
            document.getElementById('resLogradouro').innerText = data.logradouro;
            document.getElementById('resBairro').innerText = data.bairro;
            document.getElementById('resCidade').innerText = data.localidade;
            document.getElementById('resEstado').innerText = data.uf;

            divResultado.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Erro na busca:", error);
    }
}