let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()
// const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaApi(){
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    //console.table(livros)
    livros = aplicarDesconto(livros)
    exibirOSLivrosNaTela(livros)
}

