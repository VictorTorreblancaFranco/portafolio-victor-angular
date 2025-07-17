import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss']
})
export class ProjectCarouselComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  projects = [
    {
      title: 'Portafolio Digital',
      description: 'Sitio web personal desarrollado con Angular, TypeScript y SCSS, diseñado para mostrar mis habilidades y proyectos de manera elegante y profesional.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'Spring Boot', 'SQL SERVER'],
      image: 'images/Proyectos/portafolio.png',
      link: 'https://mi-portfolio.com',
      figma: 'https://figma.com/mi-portfolio',
      github: 'https://github.com/mi-usuario/portfolio'
    },
    {
      title: 'Wollover-Shop',
      description: 'Tienda e-commerce especializada en la venta de amigurumis y productos hechos y tejidos a mano. Desarrollada con React, SQL, Node.js y otras tecnologías para ofrecer una experiencia de compra atractiva y sencilla.',
      technologies: ['React', 'Node.js', 'SQL', 'JavaScript', 'CSS'],
      image: 'images/Proyectos/wollover.png',
      link: 'https://woollover-shop.vercel.app/',
      figma: 'https://figma.com/mi-portfolio',
      github: 'https://github.com/VictorTorreblancaFranco/Woollover_Shop.git'
    },
    {
      title: 'ODS - Objetivos de Desarrollo Sostenible',
      description: 'Página web informativa sobre los Objetivos de Desarrollo Sostenible (ODS) de la ONU, con el propósito de educar y concienciar sobre estos objetivos y cómo las personas pueden contribuir a alcanzarlos.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Node.js'],
      image: 'images/Proyectos/ods.png',
      link: 'https://mi-empresa-ods.com',
      figma: 'https://www.figma.com/design/o3yo2W1tOBzHxfydR3f4LA/Pagina-Web?node-id=0-1&t=aIYxaR4ZHIaOyvn2-1',
      github: 'https://github.com/vallegrande/AS241S2_T08_ODS12.git'
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