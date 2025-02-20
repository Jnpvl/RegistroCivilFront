import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMatDGComponent } from './consulta-mat-dg.component';

describe('ConsultaMatDGComponent', () => {
  let component: ConsultaMatDGComponent;
  let fixture: ComponentFixture<ConsultaMatDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMatDGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMatDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
