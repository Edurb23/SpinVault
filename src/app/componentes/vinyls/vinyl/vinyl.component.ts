import { Component, Input, OnInit } from '@angular/core';
import { Vinyl } from '../vinyl';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css'],
})
export class VinylComponent implements OnInit {


  @Input()  vinil: Vinyl = {
    id: 1,
    name: 'Two-Way Dreams',
    photo: 'https://br.freepik.com/fotos-vetores-gratis/disco-de-vinil',
    artist: 'Ngular Nova',
    year: 2010,
  };

  constructor() {}

  ngOnInit(): void {}

 getAlbumClass(year: number): string {
  if (year < 2000) {
    return 'vinyl-card-classic';
  }

  if (year >= 2015) {
    return 'vinyl-card-modern';
  }

  return 'vinyl-card-standard';
}

}
