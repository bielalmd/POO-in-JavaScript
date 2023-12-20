function Car(name, price) {
    this.name = name;
    this.price = price;
    this.calota = true
}


Car.prototype.color = 'black'
Car.prototype.calota = false

let fusca = new Car('Fusca', 10000)

if(fusca.hasOwnProperty('calota')) {
    console.log('A prop calota é do obj');
} else if(fusca.constructor.prototype.hasOwnProperty('calota')) {
    console.log('A prop calota é do prototype');
} else {
    console.log('a prop calota n existe');
}
