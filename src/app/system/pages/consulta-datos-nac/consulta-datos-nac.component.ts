import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  selector: 'app-consulta-datos-nac',
  imports: [FormsModule,CommonModule],
  templateUrl: './consulta-datos-nac.component.html',
  styleUrl: './consulta-datos-nac.component.scss'
})
export class ConsultaDatosNacComponent {

  form = {
    nombre: '',
    paterno: '',
    materno: '',
    nombreP: '',
    paternoP: '',
    maternoP: '',
    ano: '',
    mes: '',
    dia: '',
  };

  resultado: string = 'Realiza una petición';
  datosPreparados: any = null;

  constructor(private consultasService: ConsultasService) {}

  async consultar() {
    const { nombre, paterno, materno, nombreP, paternoP, maternoP, ano, mes, dia } = this.form;

    // Validación de campos
    if (!nombre || !paterno || !materno || !nombreP || !paternoP || !maternoP || !ano || !mes || !dia) {
      this.resultado = 'Por favor, complete todos los campos';
      return;
    }

    if (!/^\d{4}$/.test(ano)) {
      this.resultado = 'El año debe contener exactamente 4 dígitos';
      return;
    }

    if (!/^\d{1,2}$/.test(mes) || !/^\d{1,2}$/.test(dia)) {
      this.resultado = 'El mes y el día deben ser de 1 o 2 dígitos';
      return;
    }

    this.datosPreparados = {
      Nombre: nombre,
      Paterno: paterno,
      Materno: materno,
      NombreP: nombreP,
      PaternoP: paternoP,
      MaternoP: maternoP,
      Año: ano,
      Mes: mes,
      Dia: dia,
    };

    this.resultado = 'Realizando la petición...';

    try {
      const response = await this.consultasService.consultarDatosNacimiento(this.datosPreparados);
      this.resultado = JSON.stringify(response, null, 2);
    } catch (error) {
      this.resultado = 'Error al realizar la consulta';
    }
  }
}

