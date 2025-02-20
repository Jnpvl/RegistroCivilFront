import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-datos-nac-curp',
  imports: [CommonModule,FormsModule],
  templateUrl: './consulta-datos-nac-curp.component.html',
  styleUrl: './consulta-datos-nac-curp.component.scss'
})
export class ConsultaDatosNacCurpComponent {
  form = {
    curp: '',
    nombreP: '',
    paternoP: '',
    maternoP: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { curp, nombreP, paternoP, maternoP } = this.form;

    // Validación de campos
    if (!curp || !nombreP || !paternoP || !maternoP) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^[A-Z0-9]{18}$/i.test(curp)) {
      this.resultado = 'El CURP debe contener exactamente 18 caracteres alfanuméricos';
      return;
    }

    this.datosPreparados = {
      CURP: curp,
      NombreP: nombreP,
      PaternoP: paternoP,
      MaternoP: maternoP,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosNacimientoCurp(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}
