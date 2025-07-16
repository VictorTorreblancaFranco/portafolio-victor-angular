import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule
import { CommonModule } from '@angular/common'; // Importar CommonModule si es necesario
import { FooterComponent } from '../../layout/footer/footer.component'; // Importar FooterComponent

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatIconModule, FooterComponent, CommonModule]  // Asegúrate de incluir FooterComponent en imports
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
