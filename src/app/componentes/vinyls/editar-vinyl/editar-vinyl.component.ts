import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vinyl } from '../vinyl';
import { VinylService } from '../vinyl.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-vinyl',
  templateUrl: './editar-vinyl.component.html',
  styleUrls: ['./editar-vinyl.component.css'],
})
export class EditarVinylComponent implements OnInit {


   vinil: Vinyl = {
      id : 0,
      name: '',
      artist: '',
      year: 0,
      photo: ''
    }

  constructor(private service: VinylService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((vinil) => {
        this.vinil = vinil
      })

  }


  editarVinyl(){
    this.service.editar(this.vinil).subscribe(() => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      })
    })

  }

  cancelar(){
     this.router.navigate([''])
  }

}
