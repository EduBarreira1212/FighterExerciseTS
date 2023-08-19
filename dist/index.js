"use strict";
class Lutador {
    constructor(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
}
let lutador1 = new Lutador("Fulano", 10, 2);
let lutador2 = new Lutador("Ciclano", 7, 3);
let nomeComecar = lutador1.Nome;
Lutar(lutador1, lutador2, nomeComecar);
function Lutar(lutador1, lutador2, nome) {
    if (nome == lutador1.Nome) {
        while (!(lutador1.Vida <= 0 || lutador2.Vida <= 0)) {
            lutador2.Vida -= lutador1.Ataque;
            console.log(`${lutador1.Nome} atacou ${lutador2.Nome}`);
            console.log(`${lutador2.Nome} agora tem ${lutador2.Vida} de vida`);
            if (lutador2.Vida <= 0) {
                break;
            }
            lutador1.Vida -= lutador2.Ataque;
            console.log(`${lutador2.Nome} atacou ${lutador1.Nome}`);
            console.log(`${lutador1.Nome} agora tem ${lutador1.Vida} de vida`);
            if (lutador1.Vida <= 0) {
                break;
            }
        }
    }
    else if (nome == lutador2.Nome) {
        while (!(lutador1.Vida <= 0 || lutador2.Vida <= 0)) {
            lutador1.Vida -= lutador2.Ataque;
            console.log(`${lutador2.Nome} atacou ${lutador1.Nome}`);
            console.log(`${lutador1.Nome} agora tem ${lutador1.Vida} de vida`);
            if (lutador1.Vida <= 0) {
                break;
            }
            lutador2.Vida -= lutador1.Ataque;
            console.log(`${lutador1.Nome} atacou ${lutador2.Nome}`);
            console.log(`${lutador2.Nome} agora tem ${lutador2.Vida} de vida`);
            if (lutador2.Vida <= 0) {
                break;
            }
        }
    }
    if (lutador1.Vida > lutador2.Vida) {
        console.log(`${lutador1.Nome} ganhou`);
    }
    else if (lutador1.Vida < lutador2.Vida) {
        console.log(`${lutador2.Nome} ganhou`);
    }
}
//# sourceMappingURL=index.js.map