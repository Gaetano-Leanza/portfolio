import { Component, OnDestroy } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss'],
})
export class WhyMeComponent implements OnDestroy {
  whyMeSectionSrc = '/img/why me section/Button why-me english.png';
  isMobileMenuOpen: boolean = false;

  typingText: string = '';
  private fullTextDe = 'Ich bin ansässig in Hamm...|';
  private fullTextEn = 'I am Located in Hamm...|';

  private firstWordsDe = 'Ich bin';
  private firstWordsEn = 'I am';

  private typingInterval: any;
  private currentCharIndex = 0;
  private currentLanguage = 'en';
  private languageSub: Subscription;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.startTypingAnimation();

    this.languageSub = this.languageService.currentLanguage$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
        this.startTypingAnimation();
      }
    );
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
    this.languageSub?.unsubscribe();
  }

  whyMeMouseEnter() {
    this.whyMeSectionSrc =
      '/img/why me section/Button why-me hover english.png';
  }

  whyMeMouseLeave() {
    this.whyMeSectionSrc = '/img/why me section/Button why-me english.png';
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

    this.isMobileMenuOpen = false;
  }

  private startTypingAnimation() {
    const firstWords = this.currentLanguage === 'de' ? this.firstWordsDe : this.firstWordsEn;
    const fullTextRaw = this.currentLanguage === 'de' ? this.fullTextDe : this.fullTextEn;

    // Resttext nach ersten zwei Wörtern holen
    const restText = fullTextRaw.substring(firstWords.length).trim();

    const firstWordsHtml = `<span class="blue-text">${firstWords}</span>`;

    if (this.typingInterval) clearInterval(this.typingInterval);

    this.currentCharIndex = 0;
    this.typingText = firstWordsHtml;

    this.typingInterval = setInterval(() => {
      if (this.currentCharIndex < restText.length) {
        this.typingText = firstWordsHtml + ' ' + restText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      } else {
        clearInterval(this.typingInterval);
        setTimeout(() => this.startTypingAnimation(), 1500);
      }
    }, 100);
  }
}
