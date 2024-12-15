import { Jogo } from "./jogo";

export class Carta extends Jogo {
    constructor(
        titulo: string,
        anoPublicacao: number,
        fabricante: string,
        public idadeMinima: number
    ) { super(titulo, anoPublicacao, fabricante); }

    exibirRegras(): string {
        return `Regras do jogo de cartas "${this.titulo}": Idade mínima recomendada é de ${this.idadeMinima} anos.`;
    }
}