import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-def-dg',
  imports: [CommonModule,FormsModule],
  templateUrl: './consulta-def-dg.component.html',
  styleUrl: './consulta-def-dg.component.scss'
})
export class ConsultaDefDGComponent {
  form = {
    nombre: '',
    primerAp: '',
    segundoAp: '',
    anoNac: '',
    mesNac: '',
    diaNac: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { nombre, primerAp, segundoAp, anoNac, mesNac, diaNac } = this.form;

    // Validación de campos
    if (!nombre || !primerAp || !segundoAp || !anoNac || !mesNac || !diaNac) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^\d{4}$/.test(anoNac)) {
      this.resultado = 'El año debe contener exactamente 4 dígitos';
      return;
    }

    if (!/^\d{1,2}$/.test(mesNac) || !/^\d{1,2}$/.test(diaNac)) {
      this.resultado = 'El mes y el día deben ser de 1 o 2 dígitos';
      return;
    }

    this.datosPreparados = {
      Nombre: nombre,
      PrimerAp: primerAp,
      SegundoAp: segundoAp,
      AñoNac: anoNac,
      MesNac: mesNac,
      DiaNac: diaNac,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDefuncionDatosGenerales(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}
