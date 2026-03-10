import { Component, OnInit } from '@angular/core';
import { VinylService } from '../vinyl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-vinyl',
  templateUrl: './criar-vinyl.component.html',
  styleUrls: ['./criar-vinyl.component.css']
})
export class CriarVinylComponent implements OnInit {

   vinyl = {
    name: '',
    artist: '',
    year: 0,
    photo:''
   }



  constructor(private service: VinylService, private router: Router ) { }

  ngOnInit(): void {

  }

  criarVinyl(){
    this.service.criar(this.vinyl).subscribe(() => {
      this.router.navigate([''])
    })
  }

}
