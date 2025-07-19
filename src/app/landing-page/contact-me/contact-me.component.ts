import { Component } from '@angular/core';
import { LanguageService } from '../../../app/language.service';
import { TranslatePipe } from '../../../app/translate.pipe';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})

export class ContactMeComponent {
  EMailSrc: string = 'img/contact/🦆 icon _email_.png';
  PhoneSrc: string = 'img/contact/🦆 icon _phone_.png';
  ArrowSrc: string = 'img/contact/Arrow up.png';
  SendButtonSrc: string = 'img/contact/Send Button.png';
  InputButtonSrc: string = 'img/contact/Check box.png';

  EMailEnter(): void {
    this.EMailSrc = 'img/contact/🦆 icon _email_hover.png';
  }

  EMailLeave(): void {
    this.EMailSrc = 'img/contact/🦆 icon _email_.png';
  }

  PhoneEnter(): void {
    this.PhoneSrc = 'img/contact/🦆 icon _phone_hover.png';
  }

  PhoneLeave(): void {
    this.PhoneSrc = 'img/contact/🦆 icon _phone_.png';
  }

  arrowEnter(): void {
    this.ArrowSrc = 'img/contact/Arrow up hover.png';
  }

  arrowLeave(): void {
    this.ArrowSrc = 'img/contact/Arrow up.png';
  }

  SendButtonEnter(): void {
    this.SendButtonSrc = 'img/contact/Send Button - hover.png';
  }

  SendButtonLeave(): void {
    this.SendButtonSrc = 'img/contact/Send Button.png';
  }

  InputButtonEnter(): void {
    this.InputButtonSrc = 'img/contact/Check box hover.png';
  }

  InputButtonLeave(): void {
    this.InputButtonSrc = 'img/contact/Check box.png';
  }

  navigateTo(section: string): void {
    const targetElement = document.getElementById(section);
    const header = document.querySelector('.bottom-container');
    const headerHeight = header ? header.clientHeight : 100;

    if (targetElement) {
      const targetY =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    console.log('scrollToTop called'); // Debugging

    // Mehrere Methoden probieren
    try {
      // Methode 1: window.scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      // Methode 2: Falls das nicht funktioniert
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
    } catch (error) {
      console.error('Scroll error:', error);
      window.scrollTo(0, 0);
    }
  }
}
