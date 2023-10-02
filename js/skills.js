// Criar o dicionario para as skills

const SkillsList = [
    {name: 'html', porcentagem: '70%', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', bg: '#e44d26'}
]


// Função para exibir a lista
function exibirSkills(){
    const lista = document.getElementById("ListaSkills")
    
    SkillsList.forEach(dicionario => {
        // Criando a Div
        const div = document.createElement("div")

        const porcentagemEmPixels = (parseFloat(dicionario.porcentagem) / 100) * 300;

        const div2 = document.createElement("div2")
        div2.style.backgroundColor = dicionario.bg
        div2.style.height = porcentagemEmPixels + "px"

        // Criando o H1
        const h1 = document.createElement("h1")
        h1.textContent = dicionario.name

        // Criando a img
        const img = document.createElement("img")
        img.src = dicionario.imagem

        const porc = document.createElement("h3")
        porc.textContent = dicionario.porcentagem

        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(porc)
        
        
        lista.appendChild(div)
        lista.appendChild(div2)
    })
}

// Chamando a função
window.addEventListener("load", exibirSkills)