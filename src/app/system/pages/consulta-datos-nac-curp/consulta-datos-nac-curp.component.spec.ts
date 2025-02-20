import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosNacCurpComponent } from './consulta-datos-nac-curp.component';

describe('ConsultaDatosNacCurpComponent', () => {
  let component: ConsultaDatosNacCurpComponent;
  let fixture: ComponentFixture<ConsultaDatosNacCurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosNacCurpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosNacCurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
