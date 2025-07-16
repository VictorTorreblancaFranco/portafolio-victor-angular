import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectCarouselComponent } from './pages/project-carousel/project-carousel.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'project-carousel', component: ProjectCarouselComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    // otras rutas si es necesario
];
