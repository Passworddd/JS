
const rand = (min=1000,max=3000) => Math.floor((Math.random()*(max - min)+min)); // Nº Aleatórios
// console.log(rand(/**Já esta definifo como Max = 3s e Min = 1s */));

// Função de CallBack

// Quando se executa 

const f1 = (CallBack) => setTimeout(function() {if (CallBack) CallBack(); console.log('f1')},rand());
const f2 = (CallBack) => setTimeout(function() {if (CallBack) CallBack(); console.log('f2')},rand());
const f3 = (CallBack) => setTimeout(function() {if (CallBack) CallBack(); console.log('f3')},rand());



//--------------------------------------------------------- Com função CallBack
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Ola mundo');
        });
    });
});
