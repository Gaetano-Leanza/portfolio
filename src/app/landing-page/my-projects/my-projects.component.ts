import { Component } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})

export class MyProjectsComponent {
  button1Src = 'img/my project section/Button Primary Web.png';
  button2Src = 'img/my project section/Button Secondary Web.png';

  button1Enter() {
    this.button1Src = 'img/my project section/Button Primary Web White.png';
  }

  button1Leave() {
    this.button1Src = 'img/my project section/Button Primary Web.png';
  }

  button2Enter() {
    this.button2Src = 'img/my project section/Button Secondary Web Hover.png';
  }

  button2Leave() {
    this.button2Src = 'img/my project section/Button Secondary Web.png';
  }
}
