import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss']
})
export class ProjectCarouselComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  projects = [
    {
      title: 'Portafolio Digital',
      description: 'Sitio web personal desarrollado con Angular, TypeScript y SCSS, diseñado para mostrar mis habilidades y proyectos de manera elegante y profesional.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      image: 'images/Proyectos/portafolio.png',
      link: 'https://mi-portfolio.com',
      figma: 'https://figma.com/mi-portfolio',
      github: 'https://github.com/mi-usuario/portfolio'
    },
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación completa para gestión empresarial con módulos de inventario, facturación y reportes, construida con Spring Boot y Angular.',
      technologies: ['Spring Boot', 'Java', 'MySQL', 'Angular'],
      image: 'assets/images/projects/management-system.jpg',
      link: 'https://sistema-gestion.com',
      figma: 'https://figma.com/sistema-gestion',
      github: 'https://github.com/mi-usuario/sistema-gestion'
    },
    {
      title: 'E-commerce',
      description: 'Plataforma de comercio electrónico con integración de pagos, carrito de compras y panel administrativo, desarrollada con MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'assets/images/projects/ecommerce.jpg',
      link: 'https://mi-tienda.com',
      figma: 'https://figma.com/mi-tienda',
      github: 'https://github.com/mi-usuario/ecommerce'
    }
  ];

  currentIndex = 0;
  activeProject = this.projects[0];
  showModal = false;

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

  openProjectModal(index: number) {
    this.currentIndex = index;
    this.activeProject = this.projects[index];
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  updateCarousel() {
    this.activeProject = this.projects[this.currentIndex];
  }
}