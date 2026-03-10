import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirVinylComponent } from './excluir-vinyl.component';

describe('ExcluirVinylComponent', () => {
  let component: ExcluirVinylComponent;
  let fixture: ComponentFixture<ExcluirVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirVinylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
