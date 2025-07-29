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

  public iconSrc: string = 'assets/img/why me section/icon.png';
  public iconMobileSrc: string = 'assets/img/why me section/icon mobile.png';

  private typingInterval: any;
  private currentCharIndex = 0;
  private currentTextIndex = 0;
  private currentLanguage = 'en';
  private languageSub: Subscription;

  private textCycles = [
    {
      en: { full: 'I am located in Hamm...', highlight: 'I am' },
      de: { full: 'Ich wohne in Hamm...', highlight: 'Ich wohne' },
    },
    {
      en: { full: 'I am open to work remote...', highlight: 'I am' },
      de: {
        full: 'Ich bin bereit remote zu arbeiten...',
        highlight: 'Ich bin',
      },
    },
    {
      en: { full: 'I am open to relocate...', highlight: 'I am' },
      de: { full: 'Ich bin offen dafür umzuziehen...', highlight: 'Ich bin' },
    },
  ];

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.startTypingAnimation();

    this.languageSub = this.languageService.currentLanguage$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
        this.currentTextIndex = 0; // Neustart bei Sprachewechsel
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
    const currentSet = this.textCycles[this.currentTextIndex];
    const langSet =
      this.currentLanguage === 'de' ? currentSet.de : currentSet.en;

    const firstWords = langSet.highlight;
    const fullText = langSet.full;

    const restText = fullText.substring(firstWords.length).trim();
    const firstWordsHtml = `<span class="blue-text">${firstWords}</span>`;

    // Dynamischer Icon-Wechsel je nach aktuellem Textindex
    switch (this.currentTextIndex) {
      case 0:
        this.iconSrc = 'img/why me section/icon.png';
        this.iconMobileSrc = 'img/why me section/icon mobile.png';
        break;
      case 1:
        this.iconSrc = 'img/why me section/Icon-Remote.png';
        this.iconMobileSrc = 'img/why me section/Icon-Remote.png';
        break;
      case 2:
        this.iconSrc = 'img/why me section/Icon-Move.png';
        this.iconMobileSrc = 'img/why me section/Icon-Move.png';
        break;
    }

    if (this.typingInterval) clearInterval(this.typingInterval);

    this.currentCharIndex = 0;
    this.typingText = firstWordsHtml;

    this.typingInterval = setInterval(() => {
      if (this.currentCharIndex < restText.length) {
        this.typingText =
          firstWordsHtml +
          ' ' +
          restText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      } else {
        clearInterval(this.typingInterval);
        setTimeout(() => {
          this.currentTextIndex =
            (this.currentTextIndex + 1) % this.textCycles.length;
          this.startTypingAnimation();
        }, 1500); // Pause nach vollständigem Text
      }
    }, 100); // Tippgeschwindigkeit
  }
}
