import { Component, Input, OnInit } from '@angular/core';
import { Vinyl } from '../vinyl';
import { VinylService } from '../vinyl.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-vinyl',
  templateUrl: './excluir-vinyl.component.html',
  styleUrls: ['./excluir-vinyl.component.css']
})
export class ExcluirVinylComponent implements OnInit {


  vinil: Vinyl = {
    id : 0,
    name: '',
    artist: '',
    year: 0,
    photo: ''
  }

  constructor(private service: VinylService,  private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {

     const id = this.route.snapshot.paramMap.get('id')
     this.service.buscarPorId(parseInt(id!)).subscribe((vinil) => {
      this.vinil = vinil
     })

  }

  excluirVinil() {
    if(this.vinil.id){
      this.service.excluir(this.vinil.id).subscribe(() => {
        this.router.navigate(['']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  cancelar(){
     this.router.navigate([''])
  }

}
