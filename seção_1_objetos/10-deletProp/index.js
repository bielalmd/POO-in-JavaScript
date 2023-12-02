let car =  {
    type: "SUV",
    ligar: function() {
        console.log('ligou');
    }
}

console.log(car.type);
car.ligar()

delete car.type
delete car.ligar

console.log(car);