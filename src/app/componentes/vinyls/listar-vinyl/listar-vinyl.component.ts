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

  constructor(private service: VinylService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaVinil) => {
      this.listaVinil = listaVinil
    })
  }
}
