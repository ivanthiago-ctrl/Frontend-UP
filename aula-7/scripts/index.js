function executar(evento){
    evento.preventDefault();

    Limparform();
    validarform();
}
function validarform() {
     const nome = document.querySelector('#nome').value;
    const erroNome= document.querySelector('#erro-nome');
    if (nome === "") {
        erroNome.textContent = "Nome não pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector('#idade').value;
    const erroIdade = document.querySelector('#erro-idade');
    if (idade === "") {
        erroIdade.textContent = "Idade não pode estar vazia!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    } else if (Number(idade) < 18) {
        erroIdade.textContent = "É necessário ter 18 anos ou mais!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

    const termos = document.querySelector('#termos');
    const erroTermos = document.querySelector('#erro-termos');
    if (termos.checked === false) {
        erroTermos.textContent = "É preciso aceitar os termos!";
        erroTermos.classList.add("erro");
        erroTermos.classList.remove("oculto");
    }

    const concluido = document.querySelector('#concluido');
    const valido = document.querySelectorAll(".erro").length === 0;

    if(!valido) {
        concluido.textContent = "Corrija os erros antes de prosseguir!";
        concluido.classList.add("erro");
        concluido.classList.remove("oculto");
    } else {
        concluido.textContent = "Cadastro realizado com sucesso!";
        concluido.classList.remove("erro");
        concluido.classList.remove("oculto");
    }
}

// validar regex para email
function Limparform() {
    document.querySelectorAll(".erro").forEach((item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    });
}