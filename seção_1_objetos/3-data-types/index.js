let machine = {
    material: "Aço inox",
    equipamentos: [ 'motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numberMotors: 1,
}

console.log(machine);
console.log(machine.material);
console.log(machine.equipamentos);
console.log(machine.equipamentos[2]);

for(let i = 0; i < machine.equipamentos.length; i++) {
    console.log(machine.equipamentos[i]);
}

if(machine.vaiMontada == false){
    console.log('monta ai otario');
}
