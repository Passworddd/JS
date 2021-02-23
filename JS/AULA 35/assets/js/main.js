const paragrafos = document.querySelector('.paragrafos'); // So retorna um valor de dentro do paragrafo
const ps = document.querySelectorAll('p'); // Selecionar varios elementos




const estilosBody = getComputedStyle(document.body); // Pegou todos os stylos de body
const backgroundColorBody = estilosBody.backgroundColor; // pegou o background do body


for(let i of ps){
    i.style.color = 'rgb(255,255,255)';
    i.style.backgroundColor = backgroundColorBody;
    i.style.borderRadius = '10px'
    i.style.textAlign = 'center'
}
