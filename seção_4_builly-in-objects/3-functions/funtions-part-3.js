let a = {
    name: 'pedro',
    tellName(){
        console.log(`Esse é o nome do ${this.name}`);
    }
}

let b = {
    name: 'João'
}

let c = {
    name: ' Carlos'
}

a.tellName()

a.tellName.call(b)

a.tellName.call(c)