import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  constructor(
    public languageService: LanguageService,
    private router: Router
  ) {}

  private http = inject(HttpClient);

  // Bildquellen
  EMailSrc = 'img/contact/🦆 icon _email_.png';
  PhoneSrc = 'img/contact/🦆 icon _phone_.png';
  ArrowSrc = 'img/contact/Arrow up.png';
  SendButtonSrc = 'img/contact/Send Button.png';
  InputButtonSrc = 'img/contact/Check box.png';

  checkboxChecked = false;
  nameHasError = false;

  // Modals
  showErrorModal = false;
  showSuccessModal = false;

  // Formular-Daten
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  // Backend-Endpunkt
  private endPoint = 'https://gaetano-leanza.de/sendMail.php';

  // Formular absenden
  onSubmit(form: NgForm) {
    console.log('Form submitted:', form.valid, this.contactData);

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      this.contactData.email
    );

    if (!form.valid || !emailValid || !this.checkboxChecked) {
      this.showErrorModal = true;
      return;
    }

    this.http
      .post(this.endPoint, this.contactData, {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'text',
      })
      .subscribe({
        next: (res) => {
          console.log('Mail gesendet:', res);
          form.resetForm();
          this.checkboxChecked = false;
          this.InputButtonSrc = 'img/contact/Check box.png';
          this.showSuccessModal = true;
        },
        error: (err) => {
          console.error('Fehler beim Senden:', err);
          this.showErrorModal = true;
        },
      });
  }

  // Modal schließen
  closeModal() {
    this.showErrorModal = false;
    this.showSuccessModal = false;
  }

  // Hover-Events
  EMailEnter() {
    this.EMailSrc = 'img/contact/🦆 icon _email_hover.png';
  }

  EMailLeave() {
    this.EMailSrc = 'img/contact/🦆 icon _email_.png';
  }

  PhoneEnter() {
    this.PhoneSrc = 'img/contact/🦆 icon _phone_hover.png';
  }

  PhoneLeave() {
    this.PhoneSrc = 'img/contact/🦆 icon _phone_.png';
  }

  arrowEnter() {
    this.ArrowSrc = 'img/contact/Arrow up hover.png';
  }

  arrowLeave() {
    this.ArrowSrc = 'img/contact/Arrow up.png';
  }

  SendButtonEnter() {
    this.SendButtonSrc = 'img/contact/Send Button - hover.png';
  }

  SendButtonLeave() {
    this.SendButtonSrc = 'img/contact/Send Button.png';
  }

  InputButtonEnter() {
    if (!this.checkboxChecked) {
      this.InputButtonSrc = 'img/contact/Check box hover.png';
    }
  }

  InputButtonLeave() {
    if (!this.checkboxChecked) {
      this.InputButtonSrc = 'img/contact/Check box.png';
    }
  }

  toggleCheckbox() {
    this.checkboxChecked = !this.checkboxChecked;
    this.InputButtonSrc = this.checkboxChecked
      ? 'img/contact/Check-box-true.png'
      : 'img/contact/Check box.png';
  }

  scrollToTop() {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
    } catch (error) {
      console.error('Scroll error:', error);
      window.scrollTo(0, 0);
    }
  }

  openPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  openLegalNotice() {
    this.router.navigate(['/legal-notice']);
  }

  validateName() {
    const name = this.contactData.name.trim();
    const isValid = name.length >= 3 && /^[A-Za-zÄÖÜäöüß\s]+$/.test(name);
    this.nameHasError = !isValid;
  }
}
