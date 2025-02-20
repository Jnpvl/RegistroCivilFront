import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-mat-dg',
  imports: [FormsModule,CommonModule],
  templateUrl: './consulta-mat-dg.component.html',
  styleUrl: './consulta-mat-dg.component.scss'
})
export class ConsultaMatDGComponent {
  form = {
    nombre: '',
    primerAp: '',
    segundoAp: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { nombre, primerAp, segundoAp } = this.form;

    // Validación de campos
    if (!nombre || !primerAp || !segundoAp) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    this.datosPreparados = {
      Nombre: nombre,
      PrimerAp: primerAp,
      SegundoAp: segundoAp,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarMatrimonioDatosGenerales(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}

