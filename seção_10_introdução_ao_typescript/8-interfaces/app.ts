function showName(obj: {nome: string, age: number}) {
    console.log(`está pessoa se chama ${obj.nome} e tem ${obj.age} de idade`);
}

let pessoa1 = {nome: 'Gabriel', age: 26}
showName(pessoa1
    )

let pessoa2 = {nome: 'Joao', age: 27}

showName(pessoa2)