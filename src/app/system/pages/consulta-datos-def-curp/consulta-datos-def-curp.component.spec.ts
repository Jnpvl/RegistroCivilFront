import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosDefCurpComponent } from './consulta-datos-def-curp.component';

describe('ConsultaDatosDefCurpComponent', () => {
  let component: ConsultaDatosDefCurpComponent;
  let fixture: ComponentFixture<ConsultaDatosDefCurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosDefCurpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosDefCurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
