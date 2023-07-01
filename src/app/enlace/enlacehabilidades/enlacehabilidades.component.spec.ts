import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacehabilidadesComponent } from './enlacehabilidades.component';

describe('EnlacehabilidadesComponent', () => {
  let component: EnlacehabilidadesComponent;
  let fixture: ComponentFixture<EnlacehabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacehabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacehabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
