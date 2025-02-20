import { Component } from '@angular/core';
import { ConsultasService } from '../../../services/consultas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-datos-def-curp',
  imports: [CommonModule,FormsModule],
  templateUrl: './consulta-datos-def-curp.component.html',
  styleUrl: './consulta-datos-def-curp.component.scss'
})
export class ConsultaDatosDefCurpComponent {
  form = {
    curp: '',
    anoDef: '',
    mesDef: '',
    diaDef: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { curp, anoDef, mesDef, diaDef } = this.form;

    // Validación de campos
    if (!curp || !anoDef || !mesDef || !diaDef) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^[A-Z0-9]{18}$/i.test(curp)) {
      this.resultado = 'El CURP debe contener exactamente 18 caracteres alfanuméricos';
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
      Curp: curp,
      AñoDef: anoDef,
      MesDef: mesDef,
      DiaDef: diaDef,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosDefuncionCurp(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}

