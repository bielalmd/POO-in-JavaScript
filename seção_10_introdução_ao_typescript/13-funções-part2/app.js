function descreverCarro(marca, aro) {
    if (aro) {
        console.log("O Carro \u00E9 da marca ".concat(marca, " e tem um aro ").concat(aro));
    }
    else {
        console.log("O carro \u00E9 da marca ".concat(marca));
    }
}
descreverCarro('BMW', 20);
descreverCarro('Chevrolet');
// A funcao deve primeiro conter um paramentro obrigatoria depois um opcional!
