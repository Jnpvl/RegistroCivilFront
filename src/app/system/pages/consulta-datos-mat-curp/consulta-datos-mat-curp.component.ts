import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-datos-mat-curp',
  imports: [CommonModule,FormsModule],
  templateUrl: './consulta-datos-mat-curp.component.html',
  styleUrl: './consulta-datos-mat-curp.component.scss'
})
export class ConsultaDatosMatCURPComponent {
  form = {
    curp: '',
    anoMat: '',
    mesMat: '',
    diaMat: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { curp, anoMat, mesMat, diaMat } = this.form;

    // Validación de campos
    if (!curp || !anoMat || !mesMat || !diaMat) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^[A-Z0-9]{18}$/i.test(curp)) {
      this.resultado = 'El CURP debe contener exactamente 18 caracteres alfanuméricos';
      return;
    }

    if (!/^\d{4}$/.test(anoMat)) {
      this.resultado = 'El año debe contener exactamente 4 dígitos';
      return;
    }

    if (!/^\d{1,2}$/.test(mesMat) || !/^\d{1,2}$/.test(diaMat)) {
      this.resultado = 'El mes y el día deben ser de 1 o 2 dígitos';
      return;
    }

    this.datosPreparados = {
      CURP: curp,
      AñoMat: anoMat,
      MesMat: mesMat,
      DiaMat: diaMat,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosMatrimonioCurp(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}

