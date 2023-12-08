function criarCarro(modelo, portas, aro, tetoSolar) {
    return {
        modeloDoCaroo: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: function(){
            console.log('Ligou');
        },
        temTetoSolar: function() {
            if(this.tetoSolar == true) {
                console.log('Tem teto');
            } else {
                console.log('não tem teto');
            }
        }
    }
}

let ferrari = criarCarro('F50', 2, 18, true)

console.log(ferrari);

ferrari.ligarCarro();
ferrari.temTetoSolar();

let bmw = criarCarro('M5', 2, 16, false)
console.log(bmw);


