function Car(name, price) {
    this.name = name;
    this.price = price;
    this.calota = true;
}

Car.prototype.color = 'black'
Car.prototype.calota = false

let fusca = new Car('Fusca', 10000)

console.log(fusca.calota);

delete fusca.calota

console.log(fusca.calota); // OBJ -> prototype[dado]

