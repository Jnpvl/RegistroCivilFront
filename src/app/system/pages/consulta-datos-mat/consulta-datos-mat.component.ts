import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-datos-mat',
  imports: [FormsModule,CommonModule],
  templateUrl: './consulta-datos-mat.component.html',
  styleUrl: './consulta-datos-mat.component.scss'
})
export class ConsultaDatosMatComponent {
  form = {
    nombre: '',
    primerAp: '',
    segundoAp: '',
    nombre2: '',
    primerAp2: '',
    segundoAp2: '',
    anoMat: '',
    mesMat: '',
    diaMat: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { nombre, primerAp, segundoAp, nombre2, primerAp2, segundoAp2, anoMat, mesMat, diaMat } = this.form;

    // Validación de campos
    if (!nombre || !primerAp || !segundoAp || !nombre2 || !primerAp2 || !segundoAp2 || !anoMat || !mesMat || !diaMat) {
      this.resultado = 'Por favor, complete todos los campos';
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
      Nombre: nombre,
      PrimerAp: primerAp,
      SegundoAp: segundoAp,
      Nombre2: nombre2,
      PrimerAp2: primerAp2,
      SegundoAp2: segundoAp2,
      AñoMat: anoMat,
      MesMat: mesMat,
      DiaMat: diaMat,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosMatrimonio(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}

