function Car(name, price) {
    this.name = name;
    this.price = price;
    this.calota = true;
}


Car.prototype.color = 'black'
Car.prototype.calota = false

let fusca = new Car('Fusca', 10000)

console.log(fusca.hasOwnProperty('name'));
console.log(fusca.constructor.prototype.hasOwnProperty('name'));

Car.prototype.name = 'Ferrari'
console.log(fusca.constructor.prototype.hasOwnProperty('name'));




