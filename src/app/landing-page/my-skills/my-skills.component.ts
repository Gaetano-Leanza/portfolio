import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent implements OnInit {
  ellipseSrc: string = '';
  currentLang: 'de' | 'en' = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLang = this.languageService.getCurrentLanguage() as 'de' | 'en';
    this.updateEllipse(); // Setzt Bild beim Start

    // Reagiert auf Sprachwechsel aus anderen Komponenten
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang as 'de' | 'en';
      this.updateEllipse(); // Bild aktualisieren bei Sprachwechsel
    });
  }

  ellipseEnter() {
    this.updateEllipse(true); // Hover = true
  }

  ellipseLeave() {
    this.updateEllipse(false); // Hover = false
  }

  updateEllipse(isHovered: boolean = false) {
    if (this.currentLang === 'de') {
      this.ellipseSrc = isHovered
        ? 'img/my skills/Ellipse hover deutsch.png'
        : 'img/my skills/Ellipse deutsch.png';
    } else {
      this.ellipseSrc = isHovered
        ? 'img/my skills/Ellipse hover.png'
        : 'img/my skills/Ellipse english.png';
    }
  }
}
