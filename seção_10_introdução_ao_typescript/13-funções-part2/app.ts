function descreverCarro(marca: string, aro?: number) {
    if(aro) {
        console.log(`O Carro é da marca ${marca} e tem um aro ${aro}`);
    } else {
        console.log(`O carro é da marca ${marca}`);
    }
}

descreverCarro('BMW', 20)
descreverCarro('Chevrolet')

// A funcao deve primeiro conter um paramentro obrigatoria depois um opcional!