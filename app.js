import module from './module.js'
import ordenar from './module.js'

console.log(module);

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

var resCap = module.capitalizar(ingredientes);
var resOrder = module.ordenar(resCap);
var resCaixaAlta = module.caixaAlta(ingredientes)

console.log(resCap);
console.log(resOrder);
console.log(resCaixaAlta);


