import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDatosDefComponent } from './consulta-datos-def.component';

describe('ConsultaDatosDefComponent', () => {
  let component: ConsultaDatosDefComponent;
  let fixture: ComponentFixture<ConsultaDatosDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDatosDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDatosDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
