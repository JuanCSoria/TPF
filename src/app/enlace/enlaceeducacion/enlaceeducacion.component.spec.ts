import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceeducacionComponent } from './enlaceeducacion.component';

describe('EnlaceeducacionComponent', () => {
  let component: EnlaceeducacionComponent;
  let fixture: ComponentFixture<EnlaceeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlaceeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
