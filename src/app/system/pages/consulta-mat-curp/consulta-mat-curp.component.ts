import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-mat-curp',
  imports: [CommonModule,FormsModule],
  templateUrl: './consulta-mat-curp.component.html',
  styleUrl: './consulta-mat-curp.component.scss'
})
export class ConsultaMatCURPComponent {
  form = {
    curp: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { curp } = this.form;

    // Validación de campos
    if (!curp) {
      this.resultado = 'Por favor, complete el campo CURP';
      return;
    }

    if (!/^[A-Z0-9]{18}$/i.test(curp)) {
      this.resultado = 'El CURP debe contener exactamente 18 caracteres alfanuméricos';
      return;
    }

    this.datosPreparados = {
      CURP: curp,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarMatrimonioCurp(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}
