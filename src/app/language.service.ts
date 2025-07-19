import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: {
    de: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Translations = {
    whyMe: {
      de: 'Warum mich',
      en: 'Why me',
    },
    skills: {
      de: 'Fähigkeiten',
      en: 'Skills',
    },
    project: {
      de: 'Projekt',
      en: 'Project',
    },
    contact: {
      de: 'Kontakt',
      en: 'Contact',
    },
    aboutMe: {
      de: 'Brauchen Sie einen Teamplayer? Das sagen meine Kollegen über mich',
      en: 'Need a teamplayer? Here is what my colleagues said about me',
    },
  };

  constructor() {
    // Verwende localStorage nur, wenn im Browser ausgeführt wird
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage === 'de' || savedLanguage === 'en') {
        this.currentLanguageSubject.next(savedLanguage);
      }
    }
  }

  setLanguage(language: 'de' | 'en'): void {
    this.currentLanguageSubject.next(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  translate(key: string): string {
    const currentLang = this.getCurrentLanguage() as 'de' | 'en';
    return this.translations[key]?.[currentLang] || key;
  }

  getTranslations(): Translations {
    return this.translations;
  }
}
