// Uma galeria de imagens é um conjunto de imagens com botões de remoção correspondentes.
// Este é o código HTML de uma galeria com duas imagens:

// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>


// Implemente uma função de configuração que ao receber um evento de click implementa a seguinte lógica:
// * Quando o botão da classe "remove" é clicado, seu elemento div pai deve ser removido da galeria


// Por exemplo, depois que a primeira imagem da galeria acima foi removida, o código HTML ficaria assim:

// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>

function setup() {

    try {
        const btn = document.querySelectorAll("div");
            btn.forEach(element => {
                element.addEventListener('click',function(evento){
                    const a = evento.currentTarget
                    a.parentNode.removeChild(a);
                });
            });   
    } catch (e) {
        console.error(`PROBLEMA : ${e}`)
    }
}


//-> Solução
/*

    Crio uma variavel que vai receber as propriedades de todas div dentro dentro do body fazendo um objeto
    que pode ser pecorrido por um forEach que a cada intereção vai associar uma função a cada elemento. Essa
    assiação será escutar o eventos de click e quando escutar sera capturado o evento o qual serea removido.
    essa remoção vai se dar pelo parentNode que vai retira todos os filhos da div como também a própria div. 

*/

// Example case. 
document.body.innerHTML = `
    <div class="image">
        <img src="https://www.testdome.com/files/resources/12362/aff5c408-79f8-4220-9769-8b4cde774c98.jpg" alt="First">
        <button class="remove">X</button>
    </div>

    <div class="image">
        <img src="https://www.testdome.com/files/resources/12362/dbd97d8f-cc11-48bd-bf21-b8762a39a55e.jpg" alt="Second">
        <button class="remove">X</button>
    </div> `;

setup();

//$(".remove").get(0).click();
//console.log(document.body.innerHTML);