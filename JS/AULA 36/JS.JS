const radom = (min,max) => Math.floor(Math.random()*(max-min)+min)

/**
 * function radom (min,max) = {
 *  const r = Math.random()*(max-min)+min;
 * return Math.floor(r);
 * }
 */

let rand = radom(1, 60)
let i = 0;
while( i <= 6) {
    rand = radom(1, 60)
    console.log(rand)
    i++
}
