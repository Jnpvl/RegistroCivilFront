import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-datos-def',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-datos-def.component.html',
  styleUrl: './consulta-datos-def.component.scss',
})
export class ConsultaDatosDefComponent {
  form = {
    nombre: '',
    primerAp: '',
    segundoAp: '',
    anoDef: '',
    mesDef: '',
    diaDef: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { nombre, primerAp, segundoAp, anoDef, mesDef, diaDef } = this.form;

    // Validación de campos
    if (!nombre || !primerAp || !segundoAp || !anoDef || !mesDef || !diaDef) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^\d{4}$/.test(anoDef)) {
      this.resultado = 'El año debe contener exactamente 4 dígitos';
      return;
    }

    if (!/^\d{1,2}$/.test(mesDef) || !/^\d{1,2}$/.test(diaDef)) {
      this.resultado = 'El mes y el día deben ser de 1 o 2 dígitos';
      return;
    }

    this.datosPreparados = {
      Nombre: nombre,
      PrimerAp: primerAp,
      SegundoAp: segundoAp,
      AñoDef: anoDef,
      MesDef: mesDef,
      DiaDef: diaDef,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosDefuncion(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2); 
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}
