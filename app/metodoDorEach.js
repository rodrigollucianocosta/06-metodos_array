const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOSLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {

        // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        
        elementoParaInserirLivros.innerHTML += `

        <div class="livro">
            <!-- <img class="livro__imagens indisponivel" src="imagens/O-Retorno-do-cangaceiro-JavaScript.png" alt="Capa do livro O Retorno do Cangaceiro JavaScript+" /> -->
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />

            <!-- <h2 class="livro__titulo">Cangaceiro JavaScript +: O Retorno do cangaceiro JavaScript</h2><h2 class="livro__titulo">Cangaceiro JavaScript +: O Retorno do cangaceiro JavaScript</h2> -->
            <h2 class="livro__titulo">${livro.titulo}</h2>

            <!-- <p class="livro__descricao">Flávio Almeida</p> -->
            <p class="livro__descricao">${livro.autor}</p>

            <!-- <p class="livro__preco" id="preco">R$29,90</p> -->
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            
            <!-- <div class="tags"><span class="tag">Front-end</span> -->
            <div class="tags"><span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

/**
function verificarDisponibilidadeDoLivro(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'
    }else{
        'livro__imagens indisponível'
    }
}
*/