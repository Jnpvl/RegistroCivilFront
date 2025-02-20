import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-system',
  imports: [RouterModule,CommonModule],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {
  menuAbierto = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.router.navigate(['/home']);
  }
}


