import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMatCURPComponent } from './consulta-mat-curp.component';

describe('ConsultaMatCURPComponent', () => {
  let component: ConsultaMatCURPComponent;
  let fixture: ComponentFixture<ConsultaMatCURPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMatCURPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMatCURPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
