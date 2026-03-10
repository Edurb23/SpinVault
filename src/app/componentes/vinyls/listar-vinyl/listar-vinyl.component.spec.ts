import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVinylComponent } from './listar-vinyl.component';

describe('ListarVinylComponent', () => {
  let component: ListarVinylComponent;
  let fixture: ComponentFixture<ListarVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVinylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
