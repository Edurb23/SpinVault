import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVinylComponent } from './editar-vinyl.component';

describe('EditarVinylComponent', () => {
  let component: EditarVinylComponent;
  let fixture: ComponentFixture<EditarVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVinylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
