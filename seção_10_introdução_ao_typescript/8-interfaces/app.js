function showName(obj) {
    console.log("est\u00E1 pessoa se chama ".concat(obj.nome, " e tem ").concat(obj.age, " de idade"));
}
var pessoa1 = { nome: 'Gabriel', age: 26 };
showName(pessoa1);
var pessoa2 = { nome: 'Joao', age: 27 };
showName(pessoa2);
