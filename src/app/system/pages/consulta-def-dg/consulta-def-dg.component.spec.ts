import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDefDGComponent } from './consulta-def-dg.component';

describe('ConsultaDefDGComponent', () => {
  let component: ConsultaDefDGComponent;
  let fixture: ComponentFixture<ConsultaDefDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDefDGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDefDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
