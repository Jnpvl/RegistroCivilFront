import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiclientService } from './apiclient.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  private apiClient: ApiclientService;

  constructor(private httpClient: HttpClient) {
    this.apiClient = ApiclientService.getInstance(this.httpClient);
  }

  async consultarDatosDefuncion(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosDef?${queryParams}`);
  }
  async consultarDatosDefuncionCurp(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosDef_CURP?${queryParams}`);
  }

  async consultarDatosMatrimonio(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosMat?${queryParams}`);
  }
  async consultarDatosMatrimonioCurp(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosMat_CURP?${queryParams}`);
  }

  async consultarDatosNacimiento(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosNac${queryParams}`);
  }

  async consultarDatosNacimientoCurp(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDatosNac_Curp?${queryParams}`);
  }

  async  consultarDefuncionCurp(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDef_CURP?${queryParams}`);
  }

  async  consultarDefuncionDatosGenerales(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaDef_DG?${queryParams}`);
  }

  async  consultarMatrimonioCurp(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaMat_CURP?${queryParams}`);
  }

  async  consultarMatrimonioDatosGenerales(datos: any): Promise<any> {
    const queryParams = new URLSearchParams(datos).toString();
    return await this.apiClient.get(`registro/ConsultaMat_DG?${queryParams}`);
  }

}





