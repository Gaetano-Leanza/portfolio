import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  whyMeSectionSrc = '/img/why me section/Button why-me.png';

  whyMeMouseEnter() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me hover.png';
  }

  whyMeMouseLeave() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me.png';
  }
}
