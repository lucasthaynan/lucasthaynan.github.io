
let btnIngles = document.querySelector('.versao-ingles')
let btnPortugues = document.querySelector('.versao-portugues')

btnIngles.addEventListener('click', () => {
    traduzirSiteIngles ()
})

btnPortugues.addEventListener('click', () => {
    document.location.reload(true)
})



function traduzirSiteIngles () {

    // tradução do header
    document.querySelector('.menu-topo .sobre').innerText = 'about'
    document.querySelector('.menu-topo .projetos').innerText = 'projects'
    document.querySelector('.menu-topo .habilidades').innerText = 'skills'
    document.querySelector('.menu-topo .contato').innerText = 'contact'    

    // tradução da apresentação
    document.querySelector('.blocos .bloco-jd').innerText = 'data journalism'
    document.querySelector('.blocos .bloco-py').innerText = 'python development'
    document.querySelector('.blocos .bloco-wb').innerText = 'web programming'

    // tradução do sobre
    document.querySelector('.sobre .texto .paragrafo1').innerText = 'I have 5 years of experience in data journalism . In addition, I am an interface designer , Python developer and web programmer (initial phase). I have a degree in Journalism from the Federal University of Alagoas (Ufal) and I have a postgraduate degree in Data Journalism, Automation and Data Storytelling, from Insper.'

    document.querySelector('.sobre .texto .paragrafo2').innerText = 'In 2017, I founded the startup Agência Tatu, which develops journalistic products based on public data with a focus on the context of the Northeast region. I won awards with reports and projects aimed at exploring and visualizing data and other photojournalism projects.'

    // tradução dos projetos
    document.querySelector('section.projetos > h2').innerText = 'my projects'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-jd').innerText = 'data journalism'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-py').innerText = 'python development'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-wb').innerText = 'web programing'
   
    // tradução habilidades
    document.querySelector('section.habilidades > h2').innerText = 'my skills'
    document.querySelector('section.habilidades > p').innerText = `I have skills to work with data extraction, cleaning and analysis, using programming (python) or spreadsheets. I also have advanced knowledge in UI design (prototyping, dataviz, etc.) and I'm starting in front-end development.`

}


// script
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