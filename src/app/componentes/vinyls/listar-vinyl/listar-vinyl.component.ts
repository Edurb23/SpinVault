import { Component, OnInit } from '@angular/core';
import { VinylService } from '../vinyl.service';
import { Vinyl } from '../vinyl';

@Component({
  selector: 'app-listar-vinyl',
  templateUrl: './listar-vinyl.component.html',
  styleUrls: ['./listar-vinyl.component.css'],
})
export class ListarVinylComponent implements OnInit {
  listaVinil: Vinyl[] = [];
  paginaAtual: number = 1;
  MoreVinil: boolean = true;
  filtro: string = ''

  constructor(private service: VinylService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaVinil) => {
      this.listaVinil = listaVinil;
    });
  }

  loadMoreVinil() {
    this.service.listar(++this.paginaAtual).subscribe((listaVinil) => {
      this.listaVinil.push(...listaVinil);
      if (!listaVinil.length) {
        this.MoreVinil = false;
      }
    });
  }
}
