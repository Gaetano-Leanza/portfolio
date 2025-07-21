import { Component } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'], 
})
export class MySkillsComponent {
  ellipseSrc = 'img/my skills/Ellipse english.png';

  ellipseEnter() {
    this.ellipseSrc = 'img/my skills/Ellipse hover.png';
  }

  ellipseLeave() {
    this.ellipseSrc = 'img/my skills/Ellipse english.png';
  }
}
