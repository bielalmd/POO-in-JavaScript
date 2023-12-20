function Car(name, price) {
    this.name = name;
    this.price = price;
}
Car.prototype = {
    wheels: 4,
    doors: 4,
    start() {
        console.log('o carro ligou');
    }
}

let bmw = new Car('BMW M5 V8', 250000)

console.log(bmw);
console.log(bmw.wheels);
bmw.start();

console.log(bmw.doors);


