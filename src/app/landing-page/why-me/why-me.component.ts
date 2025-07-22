import { Component } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss'],
})
export class WhyMeComponent {
  whyMeSectionSrc = '/img/why me section/Button why-me english.png';
  isMobileMenuOpen: boolean = false;

  whyMeMouseEnter() {
    this.whyMeSectionSrc =
      '/img/why me section/Button why-me hover english.png';
  }

  whyMeMouseLeave() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me english.png';
  }

  navigateTo(section: string): void {
  console.log('Button clicked – trying to navigate to:', section);

  const targetElement = document.getElementById(section);
  const header = document.querySelector('.bottom-container');
  const headerHeight = header ? header.clientHeight : 100;

  if (targetElement) {
    const targetY =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    console.log('Scrolling to Y:', targetY);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  } else {
    console.warn('Target element NOT FOUND:', section);
  }

  this.isMobileMenuOpen = false;
}



}
