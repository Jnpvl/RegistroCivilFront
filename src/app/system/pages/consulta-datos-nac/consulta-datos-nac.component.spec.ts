import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosNacComponent } from './consulta-datos-nac.component';

describe('ConsultaDatosNacComponent', () => {
  let component: ConsultaDatosNacComponent;
  let fixture: ComponentFixture<ConsultaDatosNacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosNacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosNacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
