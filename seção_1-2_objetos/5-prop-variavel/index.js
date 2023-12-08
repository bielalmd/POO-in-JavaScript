let horse = {
    patas: 4,
    estaDomesticado: false
}

let pcGamer = {
    placaDeVideo: 'RTX 3060 12GB',
    processador: 'i5 10th',
    placaMae: 'TUF Gaming AORUS B450M-PLUS',
    meoriaRam: {
        marca: "Rise mode",
        quantidade: 4,
        quatGigas: 48
    },
    fonte: 'CORSAIR CX650M',
}

const n = "marca"
console.log(pcGamer.meoriaRam[n]);

console.log(horse);
console.log(horse.estaDomesticado);