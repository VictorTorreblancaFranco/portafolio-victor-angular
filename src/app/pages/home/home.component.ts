import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatIconModule]  // Asegúrate de que MatIconModule esté en imports
})
export class HomeComponent {
  title = 'Bienvenido a mi portafolio';
    scrollToNext(): void {
    window.scrollTo({
      top: window.innerHeight, // Desplaza hasta la parte inferior de la pantalla
      behavior: 'smooth' // Efecto de desplazamiento suave
    });
  }
}
