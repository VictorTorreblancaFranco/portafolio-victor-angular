// contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      privacyPolicy: [false, [Validators.requiredTrue]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.log('Formulario inválido', this.contactForm.errors);
      return;
    }

    this.isLoading = true;
    console.log('Formulario enviado:', this.contactForm.value);

    // Simulación de envío
    setTimeout(() => {
      this.isLoading = false;
      alert('Mensaje enviado con éxito!\n\n' +
        `Nombre: ${this.contactForm.value.name}\n` +
        `Email: ${this.contactForm.value.email}\n` +
        `Asunto: ${this.contactForm.value.subject}\n` +
        `Mensaje: ${this.contactForm.value.message}`);

      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}