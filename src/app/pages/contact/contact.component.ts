import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.showErrorAlert('Por favor completa todos los campos requeridos correctamente');
      return;
    }

    this.isLoading = true;

    // Simulación de envío (reemplaza con tu API real)
    setTimeout(() => {
      this.isLoading = false;
      this.showSuccessAlert();
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);

    // Para implementación real con API:
    /*
    this.http.post('tu-api-endpoint', this.contactForm.value)
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.showSuccessAlert();
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.showErrorAlert('Error al enviar el mensaje. Por favor intenta nuevamente.');
          console.error('Error:', error);
        }
      });
    */
  }

  private showSuccessAlert() {
    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarme. Te responderé lo antes posible.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3498db',
      customClass: {
        popup: 'sweet-alert-popup'
      }
    });
  }

  private showErrorAlert(message: string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#e74c3c',
      customClass: {
        popup: 'sweet-alert-popup'
      }
    });
  }
}