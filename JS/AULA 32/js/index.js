/**
 * for(let i = 0.0001; i >= -10; --i )
{
    console.log(`${i}`);
}

for(let i =  0; i <= 100 ; i++)
{
    const par = i%2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

 */

 const frutas = ['Maçã', 'Pêra', 'Uva', 'Natã', 'Relva', 'Brito'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`);
} 