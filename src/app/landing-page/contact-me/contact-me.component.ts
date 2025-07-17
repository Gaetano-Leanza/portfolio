import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  EMailSrc: string = 'img/contact/🦆 icon _email_.png';
  PhoneSrc: string = 'img/contact/🦆 icon _phone_.png';
  ArrowSrc: string = 'img/contact/Arrow up.png';
  SendButtonSrc: string = 'img/contact/Send Button.png';

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
}
