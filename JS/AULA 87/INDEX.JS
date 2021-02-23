const rand = (max = 3, min = 0) => get =  Math.floor(Math.random() * (max - min) - min);

const pro = (msg, tempo) => new Promise((res, rej) => {
    if (typeof msg !== 'string') {rej('CAI NO ERRO')}
    setTimeout(()=> res(msg + ' - Passei na promise'),tempo);
});

/**
 * pro('Fase 1', rand)
    .then(valor => {
        console.log(valor);
        return pro('Fase 2', rand)
    })
    .then(valor => {
        console.log(valor)
        return pro('Fase 3', rand)
    })
    .catch(e => console.log(e)) */

async function executar() {
    try {
        const fase1 = await pro('Fase 1', rand);
        console.log(fase1);

        const fase2 = await pro(3, rand);
        console.log(fase2);

        const fase3 = await pro('Fase 3', rand);
        console.log(fase3);

        console.log('Terminamos na Fase:', fase3)

    } catch(e){
        console.log(e);
    }
}

executar();