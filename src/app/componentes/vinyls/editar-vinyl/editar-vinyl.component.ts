import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vinyl } from '../vinyl';
import { VinylService } from '../vinyl.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-vinyl',
  templateUrl: './editar-vinyl.component.html',
  styleUrls: ['./editar-vinyl.component.css'],
})
export class EditarVinylComponent implements OnInit {
  vinyl!: FormGroup;

  constructor(
    private service: VinylService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.vinyl = this.formBuilder.group({
      id: [0],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(2),
        ]),
      ],
      artist: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      year: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1948),
          Validators.max(new Date().getFullYear()),
          Validators.pattern(/^\d{4}$/),
        ]),
      ],
      photo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/),
        ]),
      ],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((vinil) => {
      this.vinyl.patchValue(vinil);
    });
  }

  editarVinyl() {
    this.service.editar(this.vinyl.value).subscribe(() => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    });
  }

  cancelar() {
    this.router.navigate(['']);
  }
}
