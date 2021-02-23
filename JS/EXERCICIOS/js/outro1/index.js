const validador = (num) => typeof(num) == 'number'; // Retorna verdadeiro caso seja um numero

function tratandoNum(num){
    if(!validador(num)){
        return num;
    }
    if (num % 5 == 0 && num % 3 == 0) {
        return 'FizzBuzz';
    } else if (num % 5 == 0){
        return 'Buzz';
    } else if (num % 3 == 0){
        return 'Fizz';
    } else {
        return num;
    }

}

let i =0;

while(i <= 100){
    console.log(tratandoNum(i));
    i++;
}