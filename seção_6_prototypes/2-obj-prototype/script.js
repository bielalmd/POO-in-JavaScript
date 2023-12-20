function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.rodas = 4
Car.prototype.start = function() {
    console.log('Ligou');
}

let bmw = new Car('BMW M5 V8', 250000)

console.log(bmw);
console.log(bmw.rodas);
bmw.start()