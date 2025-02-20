import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDefCURPComponent } from './consulta-def-curp.component';

describe('ConsultaDefCURPComponent', () => {
  let component: ConsultaDefCURPComponent;
  let fixture: ComponentFixture<ConsultaDefCURPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDefCURPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDefCURPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
