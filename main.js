

let buttonsProjetos = document.querySelectorAll('.menu-projetos .blocos > p.button')

buttonsProjetos.forEach(botao => {

    botao.addEventListener('click', () => {

        efeitoDesaparecer()

        clarearBotoes()

        botao.style.opacity = 1
        botao.style.fontWeight = '400'

        console.log(botao.classList[0])        
        projetos(botao)

    })

    
})

function projetos(botao) {

    // pegando todos os container dos projetos
    let containerProjetos = document.querySelectorAll('.projetos > .container')

    console.log(containerProjetos)

    // para cada projeto gera essa função
    containerProjetos.forEach(projeto => {
        let blocos = projeto.querySelectorAll('.blocos > p')

        // remove a classe 'desativo' de todos os container de projeto
        projeto.classList.remove('desativo')

        // cria a variável com o título do projeto
        let tituloProjeto = (projeto.querySelector('h3')).textContent

        // cria variável para 'dar nota' caso o projeto tenha a classe do botão clicado, como 'bloco-ui' ou 'bloco-wb'
        let condicaoExibirProduto = 0

        // percorrendo cada bloco de cada projeto
        blocos.forEach(bloco => {

            //  pegando uma classe por vez
            let classeDoBloco = bloco.classList
            let valor = Object.values(classeDoBloco)
            let cadaClasse = valor[0]

            // se o bloco do projeto tive a classe do botão clicado, vai ser acrescido 1 na variável 'condicaoExibirProduto'
            if (cadaClasse == botao.classList[0]) {
                // console.log(cadaClasse, ' match')
                condicaoExibirProduto += 1
            } 

        })
        // caso não tenha encontrado nenhum bloco igual ao do botão clicado, vai ser adicionado a classe 'desativo' ao container do projeto para ele suma da página
        if (condicaoExibirProduto == 0) {
            projeto.classList.add('desativo')            
        } 

        // console.log('-----------------')
      

    })
}

function efeitoDesaparecer () {
    document.querySelector('div.projetos').style.opacity = 0.2
    buttonsProjetos.forEach(botao => {
        botao.style.fontWeight = '200'    
    })
    setTimeout(efeitoAparecer, 300 ) 
}

function efeitoAparecer () {
    document.querySelector('div.projetos').style.opacity = 1
    
}

function clarearBotoes () {
    buttonsProjetos.forEach(botao => {
        botao.style.opacity = 0.5        
    })
}