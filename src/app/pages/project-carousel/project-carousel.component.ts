import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss']
})
export class ProjectCarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  projects = [
    {
      title: 'Portafolio Digital',
      description: 'Sitio web personal que muestra mis habilidades y proyectos realizados.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      image: 'assets/images/projects/portfolio.jpg',
      link: '#',
      github: '#'
    },
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación web para gestión interna de una empresa mediana.',
      technologies: ['Spring Boot', 'Java', 'MySQL'],
      image: 'assets/images/projects/management-system.jpg',
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce',
      description: 'Plataforma de comercio electrónico con carrito de compras.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'assets/images/projects/ecommerce.jpg',
      link: '#',
      github: '#'
    }
  ];

  currentIndex = 0;
  activeProject = this.projects[0];

  ngAfterViewInit() {
    this.updateCarousel();
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateCarousel();
  }

  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.updateCarousel();
  }

  goToProject(index: number) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    this.activeProject = this.projects[this.currentIndex];
  }
}