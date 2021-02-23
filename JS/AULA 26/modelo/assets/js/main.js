function imc() {
    const form = document.querySelector(".container");
    const resultado = document.querySelector('.resultado');

    function validador(altura , peso) {
        if( altura < 0 || peso < 0 ){
        
            return 'Valor invalido' }
        
        else {
                const resultado = peso/(altura**2);

                if (resultado < 18.5) {
                        return ' Abaixo do peso';
                    } else if (resultado >= 18.5 && resultado <=24.9) {
                        return 'Peso Normal';
                    } else if(resultado >= 25 && resultado <= 29.9){
                        return 'Sobrepeso';
                    } else if(resultado >= 30 && resultado <= 34.9) {
                        return 'Obesidade Grau 1';
                    } else if(resultado >= 35 && resultado <= 39.9) {
                        return 'Obsidade Grau 2';
                    } else if(resuldade > 40){
                        return 'Obsidade Grau 3'; 
                }
            }
 }

    function eventoDoFormulario(evento){
        evento.preventDefault();

        const altura = form.querySelector(".input-teste-1");
        const peso = form.querySelector(".input-teste-2");

        const resu = validador(altura.value,peso.value);

        resultado.innerHTML = `${resu}`;

    }

    form.addEventListener('submit', eventoDoFormulario);
}

imc();