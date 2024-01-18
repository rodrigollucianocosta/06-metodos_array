const elementoParaInserirLivros = document.getElementById('livros')

function exibirOSLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `

        <div class="livro">
            <!-- <img class="livro__imagens indisponivel" src="imagens/O-Retorno-do-cangaceiro-JavaScript.png" alt="Capa do livro O Retorno do Cangaceiro JavaScript+" /> -->
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />

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