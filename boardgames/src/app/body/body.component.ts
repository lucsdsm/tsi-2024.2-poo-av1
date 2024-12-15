import { Component, NgModule } from '@angular/core';
import { Jogo } from '../../models/jogo';
import { Tabuleiro } from '../../models/tabuleiro';
import { Carta } from '../../models/carta';
import { Biblioteca } from '../../models/biblioteca';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  biblioteca = new Biblioteca();

  titulo = '';
  anoPublicacao = 0;
  fabricante = '';
  numeroJogadores?: '';
  idadeMinima?: '';
  tipo = 'tabuleiro'; // Valor padrão

  constructor() {
    // Adicionando jogos para teste
    this.biblioteca.adicionarJogo(new Carta('UNO', 1971, 'Mattel', 7));
  }

  get jogos(): Jogo[] {
    return this.biblioteca.listarJogos();
  }

  adicionarJogo(): void {
    if (this.tipo === 'tabuleiro' && this.numeroJogadores) {
      this.biblioteca.adicionarJogo(
        new Tabuleiro(this.titulo, this.anoPublicacao, this.fabricante, this.numeroJogadores)
      );
    } else if (this.tipo === 'carta' && this.idadeMinima) {
      this.biblioteca.adicionarJogo(
        new Carta(this.titulo, this.anoPublicacao, this.fabricante, this.idadeMinima)
      );
    }
    this.limparFormulario();
  }

  removerJogo(titulo: string): void {
    this.biblioteca.removerJogo(titulo);
  }

  limparFormulario(): void {
    this.titulo = '';
    this.anoPublicacao = 0;
    this.fabricante = '';
    this.numeroJogadores = '';
    this.idadeMinima = '';
  }
}
