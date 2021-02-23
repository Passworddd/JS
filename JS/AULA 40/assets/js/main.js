const retonaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date();
    const hora = retonaHora(11);
    console.log(hora);
} catch (e) {
    
} finally {
    console.log('Tenha um bom dia.')
}


/**
 *
 * console.log(hora)
try {
    console.log('a');
    console.log('Abri um arquivo');
    console.log('Mipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('tratamento o erro')
} finally {
    console.log('FINALLY: Eu sempre execulto')
}
 *
 *
 */