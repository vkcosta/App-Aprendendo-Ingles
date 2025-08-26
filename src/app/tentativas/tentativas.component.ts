import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [];

  ngOnChanges(change: SimpleChanges) {

    if (change.tentativas.currentValue) {
      this.coracoes = Array.from({ length: this.tentativas }, () => new Coracao(true));
    }

    if (this.coracoes.length > 0 && this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }
}
