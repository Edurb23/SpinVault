import { Component, OnInit } from '@angular/core';
import { VinylService } from '../vinyl.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-vinyl',
  templateUrl: './criar-vinyl.component.html',
  styleUrls: ['./criar-vinyl.component.css']
})
export class CriarVinylComponent implements OnInit {


   vinil!: FormGroup;



  constructor(private service: VinylService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.vinil = this.formBuilder.group({
      name: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(2)
      ])],
      artist: ['', Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      year: [null, Validators.compose([
          Validators.required,
          Validators.min(1948),
          Validators.max(new Date().getFullYear()),
          Validators.pattern(/^\d{4}$/)
      ])],
      photo: ['',  Validators.compose([
          Validators.required,
          Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)
  ])]

    })

  }

  criarVinyl(){
    if(this.vinil.valid){
      this.service.criar(this.vinil.value).subscribe(() => {
        this.router.navigate([''])
      })
    }else{
      alert("Preecha todos os campos")
    }
  }

    habilitarButton(): string{
      if(this.vinil.valid){
        return 'button'
      }else{
        return 'button__disabled'
      }
    }


}
