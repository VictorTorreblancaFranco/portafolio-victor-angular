import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'Angular 19+', level: 80 },
    { name: 'Angular Material', level: 75 },
    { name: 'React', level: 40 },
    { name: 'HTML5/CSS3/SCSS', level: 85 },
    { name: 'Bootstrap', level: 70 }
  ];

  backendSkills = [
    { name: 'Spring Boot', level: 75 },
    { name: 'Node.js', level: 40 },
    { name: 'Postman', level: 65 }
  ];

  databaseSkills = [
    { name: 'SQL', level: 70 },
    { name: 'MySQL', level: 50 }
  ];

  devopsSkills = [
    { name: 'AWS (EC2/RDS/ECS)', level: 50 },
    { name: 'Docker', level: 45 },
    { name: 'Git/GitHub', level: 85 }
  ];

  toolSkills = [
    { name: 'VS Code', level: 90 },
    { name: 'IntelliJ IDEA', level: 70 },
    { name: 'Trello', level: 65 },
    { name: 'Scrum', level: 75 }
  ];

  softSkills = [
    'Trabajo en equipo',
    'Trabajo bajo presión',
    'Resolución de problemas',
    'Comunicación efectiva'
  ];
}