var Human = /** @class */ (function () {
    function Human(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Human.prototype.apresentarHuman = function () {
        return "O nome desse humano \u00E9 ".concat(this.nome, " e ele tem ").concat(this.idade, " anos");
    };
    return Human;
}());
var gabriel = new Human('Gabriel', 26);
console.log(gabriel);
console.log(gabriel.apresentarHuman());
