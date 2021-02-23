function meuEscopo(){
    const form = document.querySelector('.form'); // O formulado vai ser encontrado e jogado na variavél form criada
    const resultado = document.querySelector('.resultado');// o campo de resultado vai ser jogada na constante resultado no js
    const pessoas = []; // Um vetor que sera global vai quarda os objetos gerado pelo função recebeEventoForm

    function recebeEventoForm(evento) { // A função serve para da inicil ao acontecimento listado em baixo
        evento.preventDefault(); // Deixar de reniciar a página

        const nome = form.querySelector('.nome');// o nome, sobrenome, peso e altura vão ser armazenado depois de buscado no html
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
     // Nome do vator.push({ });  
        pessoas.push( { // Esse é um vetor do tipo objeto que está guardando sempre no final do vetor um objeto com nome, altura e etc..
            Nome: nome,
            Sobrenome: sobrenome,
            Peso: peso,
            Altura: altura,
        });
    
        console.log(pessoas);// Verificando o que tem dentro do vetor de objeto

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`; // Gravando o arquivo de texto html dentro da divisoria classificada como resultado
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`; // Lembrar de sempre referenciar o valor(value) do objeto e não o próprio objeto
        resultado.innerHTML += `<p>Idade: ${peso.value}</p> `;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
        
    }

    form.addEventListener('submit', recebeEventoForm); // Form vai ter um escutador de evento -- Esse escutador vai ser ativado toda vez que assão 'Submit' for ativada assim existindo uma ação que pode ser a função recebeEventoForm
     
    
}

    meuEscopo(); // inicializando a função

