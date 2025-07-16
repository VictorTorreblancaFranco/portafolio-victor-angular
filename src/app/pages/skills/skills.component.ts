import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  name: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  showModal = false;
  selectedSkill: Skill = { name: '', level: 0 };

  frontendSkills: Skill[] = [
    { name: 'Angular 19+', level: 80 },
    { name: 'Angular Material', level: 75 },
    { name: 'React', level: 40 },
    { name: 'HTML5/CSS3/SCSS', level: 85 },
    { name: 'Bootstrap', level: 70 }
  ];

  backendSkills: Skill[] = [
    { name: 'Spring Boot', level: 75 },
    { name: 'Node.js', level: 40 },
    { name: 'Postman', level: 65 }
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL', level: 70 },
    { name: 'MySQL', level: 50 }
  ];

  devopsSkills: Skill[] = [
    { name: 'AWS (EC2/RDS/ECS)', level: 50 },
    { name: 'Docker', level: 45 },
    { name: 'Git/GitHub', level: 85 }
  ];

  toolSkills: Skill[] = [
    { name: 'VS Code', level: 90 },
    { name: 'IntelliJ IDEA', level: 70 },
    { name: 'Trello', level: 65 },
    { name: 'Scrum', level: 75 }
  ];

  softSkills: string[] = [
    'Trabajo en equipo',
    'Trabajo bajo presión',
    'Resolución de problemas',
    'Comunicación efectiva'
  ];

  projects: Project[] = [
    {
      name: 'Portfolio Personal',
      description: 'Aplicación web para mostrar mis proyectos y habilidades',
      skills: ['Angular 19+', 'HTML5/CSS3/SCSS', 'Git/GitHub']
    },
    {
      name: 'API REST',
      description: 'Desarrollo de API con Spring Boot para sistema de gestión',
      skills: ['Spring Boot', 'Postman', 'MySQL']
    }
  ];

  openModal(skill: Skill): void {
    this.selectedSkill = skill;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  getSkillIcon(skillName: string): string {
    const icons: { [key: string]: string } = {
      'Angular 19+': 'fab fa-angular',
      'Angular Material': 'fab fa-angular',
      'React': 'fab fa-react',
      'HTML5/CSS3/SCSS': 'fab fa-html5',
      'Bootstrap': 'fab fa-bootstrap',
      'Spring Boot': 'fas fa-leaf',
      'Node.js': 'fab fa-node-js',
      'Postman': 'fas fa-api',
      'SQL': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'AWS (EC2/RDS/ECS)': 'fab fa-aws',
      'Docker': 'fab fa-docker',
      'Git/GitHub': 'fab fa-github',
      'VS Code': 'fas fa-code',
      'IntelliJ IDEA': 'fas fa-jet-fighter',
      'Trello': 'fab fa-trello',
      'Scrum': 'fas fa-tasks'
    };

    return icons[skillName] || 'fas fa-code';
  }

  getSkillDescription(skillName: string): string {
    const descriptions: { [key: string]: string } = {
      'Angular 19+': 'Framework para construir aplicaciones web modernas y escalables con TypeScript.',
      'Angular Material': 'Biblioteca de componentes UI para Angular siguiendo Material Design.',
      'React': 'Biblioteca JavaScript para construir interfaces de usuario interactivas.',
      'HTML5/CSS3/SCSS': 'Tecnologías fundamentales para la estructura y diseño de páginas web.',
      'Bootstrap': 'Framework CSS para desarrollar sitios web responsivos y móviles.',
      'Spring Boot': 'Framework para desarrollar aplicaciones empresariales en Java.',
      'Node.js': 'Entorno de ejecución para JavaScript del lado del servidor.',
      'Postman': 'Herramienta para probar y documentar APIs REST.',
      'SQL': 'Lenguaje estándar para gestionar bases de datos relacionales.',
      'MySQL': 'Sistema de gestión de bases de datos relacionales de código abierto.',
      'AWS (EC2/RDS/ECS)': 'Servicios en la nube para computación, bases de datos y contenedores.',
      'Docker': 'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.',
      'Git/GitHub': 'Sistema de control de versiones y plataforma de colaboración.',
      'VS Code': 'Editor de código ligero pero potente.',
      'IntelliJ IDEA': 'IDE para desarrollo en Java y otros lenguajes.',
      'Trello': 'Herramienta de gestión de proyectos basada en Kanban.',
      'Scrum': 'Metodología ágil para gestión y desarrollo de software.'
    };

    return descriptions[skillName] || 'Habilidad técnica en desarrollo de software.';
  }

  getSkillExperience(skillName: string): string[] {
    const experiences: { [key: string]: string[] } = {
      'Angular 19+': [
        '2 años desarrollando aplicaciones empresariales',
        'Implementación de componentes reutilizables',
        'Manejo de estado con RxJS y NgRx'
      ],
      'Spring Boot': [
        'Desarrollo de APIs RESTful',
        'Integración con bases de datos',
        'Implementación de seguridad con JWT'
      ],
      'Git/GitHub': [
        'Control de versiones en proyectos personales y profesionales',
        'Trabajo colaborativo con Git Flow',
        'Implementación de CI/CD'
      ]
    };

    return experiences[skillName] || [
      'Experiencia práctica en proyectos personales y profesionales',
      'Conocimiento aplicado en situaciones reales'
    ];
  }

  getProjectsForSkill(skillName: string): Project[] {
    return this.projects.filter(project =>
      project.skills.includes(skillName)
    );
  }
}