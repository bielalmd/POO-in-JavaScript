function Ninja(nome, jutsuMaisPoderoso) {
    this.nome = nome;
    this.jutsuMaisPoderoso = jutsuMaisPoderoso;
}

const yamato = new Ninja('Yamato', 'Rasengan')
const itachi = new Ninja('Itachi', 'Genjutsu')
const cloneYamato = new Ninja('Yamato', 'Rasengan')
const cloneDeVerdade = yamato;

console.log(yamato == itachi);

console.log(yamato == cloneYamato);

console.log(yamato == cloneDeVerdade);
