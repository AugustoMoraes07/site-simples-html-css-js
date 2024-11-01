const botaoTema = document.querySelector('#btn')
const botaoLingua = document.querySelector('#btnlan')

//Detectar o tema atual
let tatual = document.body.classList.contains('light-theme')?'Tema Claro':'Tema Escuro'

//Mudar o tema
function mudarTema(){
  document.body.classList.toggle('light-theme')
  document.body.classList.toggle('dark-theme')
  mudarTxtTema() 
}

function mudarTxtTema(){
  botaoTema.innerText = document.body.classList.contains('light-theme')?traducao[currentLan].theme1:traducao[currentLan].theme2
}


//MUDAR A LINGUAGEM
const traducao = {
  pt:{
    title:'Lista de tarefas para criar um site simples',
    item1:'Colocar o conteúdo',
    item2:'Configurar e ativar os estilos visuais',
    item3:'Crie um tema claro e escuro',
    item4:'Criar um botão de mudança de tema',
    item5:'Fazer uma função para o botão',
    item6:'Configurar a função para ficar dinâmico',
    lan:'Português',
    theme1:'Claro',
    theme2:'Escuro'
  }
  ,
  en:{
    title:'To-do list for creating a simple website',
    item1:'Place the content',
    item2:'Configure and enable visual styles',
    item3:'Create a light and dark theme',
    item4:'Create a theme change button',
    item5:'Make a function for the button',
    item6:'Configure the function to be dynamic', 
    lan:'English',
    theme1:'Light',
    theme2:'Dark'
  }
}

let currentLan = 'pt'
function mudarLingua(){
  currentLan = currentLan === 'pt'?'en':'pt'
  document.getElementById('title').innerText = traducao[currentLan].title
  document.getElementById('item1').innerText = traducao[currentLan].item1
  document.getElementById('item2').innerText = traducao[currentLan].item2
  document.getElementById('item3').innerText = traducao[currentLan].item3
  document.getElementById('item4').innerText = traducao[currentLan].item4
  document.getElementById('item5').innerText = traducao[currentLan].item5
  document.getElementById('item6').innerText = traducao[currentLan].item6

  mudarTxtTema()
  botaoLingua.innerText = traducao[currentLan].lan
}