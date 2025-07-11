import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  whyMeSectionSrc = '/img/why me section/Button why-me english.png';

  whyMeMouseEnter() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me hover english.png';
  }

  whyMeMouseLeave() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me english.png';
  }
}
