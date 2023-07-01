import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceexperienciaComponent } from './enlaceexperiencia.component';

describe('EnlaceexperienciaComponent', () => {
  let component: EnlaceexperienciaComponent;
  let fixture: ComponentFixture<EnlaceexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
