import { Component, OnInit } from '@angular/core';
import { VinylService } from '../vinyl.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-vinyl',
  templateUrl: './criar-vinyl.component.html',
  styleUrls: ['./criar-vinyl.component.css']
})
export class CriarVinylComponent implements OnInit {


   formulario!: FormGroup;



  constructor(private service: VinylService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      name: ['formulario reativo'],
      artist: [''],
      year: [0],
      photo: ['']

    })

  }

  criarVinyl(){
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate([''])
    })
  }

}
