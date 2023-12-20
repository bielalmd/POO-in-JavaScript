let equipamentosDoCarro = {
    price: 10000,
    calota: true,
    color: 'Blue',
    aro: 16
}

function Car(name) {
    this.name = name;
}

Car.prototype = equipamentosDoCarro;

let fusca = new Car('Fusca');

console.log(equipamentosDoCarro.isPrototypeOf(fusca));



