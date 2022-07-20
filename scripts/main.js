/*const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = ' Emojis e suas variações de humor!'*/
 
//Pergunta, armazena e guarda o nome do usuário.
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/cuteemoji.jpg') {
        minhaImagem.setAttribute ('src','imagens/emoji2.png');
    } else {
        minhaImagem.setAttribute ('src','imagens/cuteemoji.jpg');
    }
}

let meuBotao = document.querySelector('button')
let meuCabecalho = document.querySelector('tittle')

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = `Emojis são legais, ${meuNome}`;
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = `Bem-Vindo(a), ${nomeGuardado}`;
}

meuBotao.onclick = function() { 
    defineNomeUsuario();
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome' , meuNome);
        meuCabecalho.innerHTML = `Bem-Vindo(a), ${meuNome}`;
    }
}