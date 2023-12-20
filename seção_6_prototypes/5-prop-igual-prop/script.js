function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.color = 'black'
Car.prototype.calota = false

let fusca = new Car('Fusca', 10000)

console.log(fusca.color);

fusca.color = 'pink'

console.log(fusca.color);

console.log(fusca.calota); 

fusca.color.replace