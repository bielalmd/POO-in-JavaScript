interface config {
    marca: string,
    aro?: number,
    tetoSolar: boolean,
    cor?: string
}

function criarCarro(config: config): {marca: string, aro: number, tetoSolar: boolean, cor: string} {
    let carro = {marca: 'undefined', aro: 16, tetoSolar: false, cor: 'undefined'}

    if (config.marca) {
        carro.marca = config.marca
    }

    if(config.aro) {
        carro.aro = config.aro
    }

    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar
    }

    if (config.cor) {
        carro.cor = config.cor
    }

    return carro
}

let bmw = criarCarro({marca: 'BMW', tetoSolar: true})

console.log(bmw);

let ferrari = criarCarro({marca: "Ferrari", aro: 20, tetoSolar: true, cor: 'Vermelho'})
console.log(ferrari);