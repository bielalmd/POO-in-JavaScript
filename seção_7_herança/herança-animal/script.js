// Definindo um construtor para a "classe" Animal
function Animal(nome) {
    this.nome = nome;
  }

  // Adicionando um método ao protótipo de Animal
  Animal.prototype.dizerNome = function () {
    console.log(`Meu dono me chama de ${this.nome}`);
  }

    // Criando um objeto Cachorro que herda de Animal
    function Cachorro(nome, raca) {
        // Chamando o construtor de Animal no contexto de Cachorro
        Animal.call(this, nome);
        this.raca = raca;
    }

    function Gato(nome, cor) {
        Animal.call(this, nome);
        this.cor = cor
    }
  
  // Estabelecendo a herança
  Gato.prototype = Object.create(Animal.prototype)
  Cachorro.prototype = Object.create(Animal.prototype);
  
  // Adicionando um método específico para Cachorro
  Cachorro.prototype.latir = function() {
    console.log('Woof!');
  };
  Gato.prototype.miar = function() {
    console.log('Miau');
  }
  
  // Criando uma instância de Cachorro
  var meuCachorro = new Cachorro('Bradoock', 'Golden Retriver');
  var meuGato = new Gato('Mari', 'Branca e cinza')
  // Usando métodos herdados
  meuCachorro.dizerNome(); // Saída: Meu dono me chama de Bradoock
  meuCachorro.latir(); // Saída: Woof!

  meuGato.dizerNome() // Saida: Meu dono me chama de Mari
  meuGato.miar()// Saida: Miau