import { Component } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss'], 
})
export class WhyMeComponent {
  whyMeSectionSrc = '/img/why me section/Button why-me english.png';

  whyMeMouseEnter() {
    this.whyMeSectionSrc =
      '/img/why me section/Button why-me hover english.png';
  }

  whyMeMouseLeave() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me english.png';
  }
}
