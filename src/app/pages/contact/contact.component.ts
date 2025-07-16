import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/)]],
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Puedes inicializar valores por defecto aquí si es necesario
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Aquí normalmente harías la llamada a tu API o servicio de correo
    const formData = this.contactForm.value;
    console.log('Form data to submit:', formData);

    // Simulación de envío a una API
    this.http.post('https://your-api-endpoint.com/contact', formData)
      .pipe(
        catchError(error => {
          this.isLoading = false;
          this.errorMessage = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
          return throwError(error);
        })
      )
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = '¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes posible.';
          this.contactForm.reset();
          this.submitted = false;
        },
        error: () => {
          // El error ya se maneja en el pipe catchError
        }
      });
  }

  // Método para resetear el formulario
  resetForm() {
    this.contactForm.reset();
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
  }
}