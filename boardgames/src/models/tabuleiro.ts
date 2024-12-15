import { Jogo } from "./jogo";

export class Tabuleiro extends Jogo {
    constructor(
        titulo: string,
        anoPublicacao: number,
        fabricante: string,
        public numeroJogadores: number
    ) { super(titulo, anoPublicacao, fabricante); }

    exibirRegras(): string {
        return `Regras do jogo de tabuleiro "${this.titulo}": Ideal para ${this.numeroJogadores} jogadores.`;
    }
}