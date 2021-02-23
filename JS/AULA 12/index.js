let var1 = 'A'; // B
let var2 = 'B'; // C
let var3 = 'C'; // A

let vaR;

console.log(`${var1} ${var2} ${var3}`);

vaR = var1;
var1 = var2;
var2 = var3;
var3 = vaR;

console.log(`${var1} ${var2} ${var3}`);