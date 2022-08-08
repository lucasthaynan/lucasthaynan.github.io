
let btnIngles = document.querySelector('.versao-ingles')
let btnPortugues = document.querySelector('.versao-portugues')

btnIngles.addEventListener('click', () => {
    // btnIngles.style.fontWeight = '600'
    btnIngles.style.color = '#000000'
    btnPortugues.style.color = '#bbbbbb'
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

    // ajustando tamanho dos blocos
    document.querySelector('div.blocos .bloco-wb').style.width = '90%' 
    document.querySelector('div.blocos .bloco-ui').style.width = '55%'


    // tradução do sobre
    document.querySelector('.sobre .texto .paragrafo1').innerText = 'I have 5 years of experience in data journalism. In addition, I am an interface designer, Python developer and web programmer (initial phase). I have a degree in Universidade Federal de Alagoas (Ufal) and I have a postgraduate degree in Data Journalism, Automation and Data Storytelling, from Insper.'

    document.querySelector('.sobre .texto .paragrafo2').innerText = 'In 2017, I founded the startup Agência Tatu, which develops journalistic products based on public data with a focus on the context of the Northeast region. I won awards with reports and projects aimed at exploring and visualizing data and other photojournalism projects.'

    // tradução dos projetos
    document.querySelector('section.projetos > h2').innerText = 'my projects'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-jd').innerText = 'data journalism'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-py').innerText = 'python development'
    document.querySelector('section.projetos .menu-projetos .blocos .bloco-wb').innerText = 'web programing'

    // voo dos meis
    document.querySelector('.voo-meis h3').innerText = `The flight of "MEIs" in the state of Alagoas`
    document.querySelector('.voo-meis > p').innerText = 'Special report on the evolution in the number of Individual Microentrepreneurs in the state of Alagoas'

    // litrometro
    document.querySelector('.litrometro h3').innerText = 'Fuel price monitor in Maceió'
    document.querySelector('.litrometro > p').innerText = 'The Litrômetro is a tool that daily monitors the price of various types of fuel in the capital of Alagoas'

    // quiz google
    document.querySelector('.quiz-google h3').innerText = 'Google Trends Quiz'
    document.querySelector('.quiz-google > p').innerText = 'The game allows you to test your knowledge of the main search terms on Google in 2021'

    // bolsanews
    document.querySelector('.bolsanews h3').innerText = 'BolsaNews, the best friend of your investments'
    document.querySelector('.bolsanews > p').innerText = `The project is a newsletter that is automatically sent, every day, with personalized information about each user's stock portfolio`

    // abastece maceio
    document.querySelector('.abastece-maceio h3').innerText = 'Fuel price app'
    document.querySelector('.abastece-maceio > p').innerText = 'The Abastece Maceió app provides the user, in real time, with the price of fuel in the capital of Alagoas'

    // game elon musk
    document.querySelector('.elon-musk h3').innerText = `Game - Spend Elon Musk's fortune`
    document.querySelector('.elon-musk > p').innerText = 'Interactive tool where the user has the mission to spend the money of the richest man in the world'

    // materia evolucao covid
    document.querySelector('.evolucao-covid h3').innerText = 'Evolution of vaccination against Covid-19 in Alagoas'
    document.querySelector('.evolucao-covid > p').innerText = 'Survey shows pace of immunization of the 1st, 2nd and single dose in the state. The analyzes were performed in Python'

   
    // tradução habilidades
    document.querySelector('section.habilidades > h2').innerText = 'my skills'
    document.querySelector('section.habilidades > p').innerText = `I have skills to work with data extraction, cleaning and analysis, using programming (python) or spreadsheets. I also have advanced knowledge in UI design (prototyping, dataviz, etc.) and I'm starting in front-end development.`

    document.querySelector('section.habilidades .textos-indice > h3').innerText = 'comfort index'
    document.querySelector('section.habilidades .textos-indice > p').innerText = 'The more circles filled in, the more comfortable I feel working with the technology/tool.'
    document.querySelector('section.habilidades .pouco-confortavel > p').innerText = 'uncomfortable'
    document.querySelector('section.habilidades .muito-confortavel > p').innerText = 'very comfortable'

    // tradução contato 
    document.querySelector('section.contato p.texto-contato').innerText = 'To talk to me, just write to the email below or get in touch through my social networks.'

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


let menuMobile = document.getElementById('checkbox-menu')

menuMobile.addEventListener('click', e =>{
    if (menuMobile.checked == true) {
        console.log('ativo')


        document.querySelectorAll('nav.menu-topo > a').forEach(item => {
            item.style.display = 'block'
        })
        document.querySelector('div.traducao').style.display = 'flex'
        document.querySelector('div.linha-menu-topo').style.display = 'flex'

    } else {
        document.querySelectorAll('nav.menu-topo > a').forEach(item => {
            item.style.display = 'none'
        })
        document.querySelector('div.traducao').style.display = 'none'
        document.querySelector('div.linha-menu-topo').style.display = 'none'
        console.log('desativo')
    }
})


document.querySelectorAll('nav.menu-topo > a').forEach(opcao => {
    opcao.addEventListener('click', e => {

        if (window.innerWidth <= 650) {
            menuMobile.checked = false
            document.querySelectorAll('nav.menu-topo > a').forEach(item => {
                item.style.display = 'none'
            })
            document.querySelector('div.traducao').style.display = 'none'
            document.querySelector('div.linha-menu-topo').style.display = 'none'
        }
        
    })
})