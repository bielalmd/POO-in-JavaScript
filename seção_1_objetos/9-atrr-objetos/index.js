let car =  {
    type: "SUV",
}

car.portas = 4;

console.log(car);

if(car.type == "SUV") {
    car.tetoSolar = true
}

console.log(car);

car.acelerar = function() {
    console.log("Vrummmm");
}

car.acelerar()