import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';
import { ProjectCarouselComponent } from '../project-carousel/project-carousel.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component'; // Nueva importación

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatIconModule,
    FooterComponent,
    CommonModule,
    ProjectCarouselComponent,
    SkillsComponent,
    ContactComponent // Agregado aquí
  ]
})
export class HomeComponent {
  title = 'Bienvenido a mi portafolio';

  scrollToNext(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}