import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceproyectoComponent } from './enlaceproyecto.component';

describe('EnlaceproyectoComponent', () => {
  let component: EnlaceproyectoComponent;
  let fixture: ComponentFixture<EnlaceproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
