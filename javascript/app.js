const botao = document.querySelector('.btn')

//Detectar o tema atual
let tatual = document.body.classList.contains('light-theme')?'Tema Claro':'Tema Escuro'

//Mudar o tema
function mudarTema(){
  if(tatual === 'Tema Claro'){
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    tatual = 'Tema Escuro'
  } else{
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    tatual = 'Tema Claro'
  }
  botao.innerText = tatual === 'Tema Claro'?'Claro':'Escuro'
}
