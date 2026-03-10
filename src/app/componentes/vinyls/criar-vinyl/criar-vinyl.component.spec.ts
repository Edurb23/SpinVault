import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVinylComponent } from './criar-vinyl.component';

describe('CriarVinylComponent', () => {
  let component: CriarVinylComponent;
  let fixture: ComponentFixture<CriarVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVinylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
