function Car(name, price, color, aro) {
    this.name = name;
    this.price = price;
    this.calota = true;
    this.color = color;
    this.aro = aro;
}

let fusca = new Car('Fusca', 10000, 'red', 18);

for(prop in fusca) {
    console.log(`${prop} => ${fusca[prop]}`);
}

//obj['prop']
//obj.prop


