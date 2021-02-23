class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de estático
    static trocaPilha() {
        console.log('Vou trocar as pilhas');
    }
}

const controle1 = new ControleRemoto('Samsug');

controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocaPilha();