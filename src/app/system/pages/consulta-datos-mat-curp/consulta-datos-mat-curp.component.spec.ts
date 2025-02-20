import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosMatCURPComponent } from './consulta-datos-mat-curp.component';

describe('ConsultaDatosMatCURPComponent', () => {
  let component: ConsultaDatosMatCURPComponent;
  let fixture: ComponentFixture<ConsultaDatosMatCURPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosMatCURPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosMatCURPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
