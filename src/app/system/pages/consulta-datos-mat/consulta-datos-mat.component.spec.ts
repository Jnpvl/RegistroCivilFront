import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosMatComponent } from './consulta-datos-mat.component';

describe('ConsultaDatosMatComponent', () => {
  let component: ConsultaDatosMatComponent;
  let fixture: ComponentFixture<ConsultaDatosMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosMatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
