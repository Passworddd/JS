// 1º Comando

document.addEventListener('click',(e)=>{ // Escuta o evento
    const el = e.target; // el recebe o elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // Detecta a Tag e converte para lower Case

    if(tag === 'a'){ // Se a tag for 'a' então
        e.preventDefault(); // Não carrega a página
        carregarPagina(el); // Inicializa a função passando o conteudo que foi clicado
    }
});

async function carregarPagina(conteudo) { // Async vai gerar um promise tendo como base a função
    const href = conteudo.getAttribute('href'); // href recebe o elemento o conteúdo que está linkado pelo href
    const response = await fetch(href) // response é criada como um Promisse que vai processar o resto da função na ordem

    
    if(response.status != 200) throw new Error('ERRO NOSSO')// Se o estatus do response for diferente 200 então gera um erro
    
    try { // É feita uma tentativa de rodar o função 
        const html = await response.text(); // html vai receber response como uma promisse com o conteudo do response convertido para texto
        resultado(html);// Resposta vai receber o html que tem todo o conteúdo do response
    } catch (e){ // Caso encontre algum problema
        console.error(`ERRO MEU : ${e}`); // Retorna um error no console do navegador com o erro em seguida
    }
    
}
    

function resultado(linkInterno){ // resultado vai receber o html e adicionar a secion 

    const sec = document.querySelector('.resultado'); // sec vai receber os elementos e atributos co campo resultado do html

    sec.innerHTML = linkInterno;// vai receber o html e trocar seu valor
}