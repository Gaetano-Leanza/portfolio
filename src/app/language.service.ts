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
    mySkills: {
      de: 'Meine Fähigkeiten',
      en: 'My Skills',
    },
    project: {
      de: 'Projekt',
      en: 'Project',
    },
    myProjects: {
      de: 'Meine Projekte',
      en: 'My Projects',
    },
    contact: {
      de: 'Kontakt',
      en: 'Contact',
    },
    contactMe: {
      de: 'Kontaktiere mich',
      en: 'Contact me',
    },
    aboutMe: {
      de: 'Brauchen Sie einen Teamplayer? Das sagen meine Kollegen über mich',
      en: 'Need a teamplayer? Here is what my colleagues said about me',
    },
    whyMeText: {
      de: 'Ich brenne für das Programmieren, weil es mir ermöglicht, analytisches Denken mit Kreativität zu verbinden, um Lösungen zu entwickeln, die wirklich etwas bewirken. Ich genieße es, komplexe Probleme in ihre Bestandteile zu zerlegen, verschiedene Herangehensweisen zu erkunden und im Team die beste Lösung zu finden. Programmieren fordert mich heraus, beharrlich zu sein und ständig dazuzulernen, während es mir gleichzeitig die Freiheit gibt, Neues zu erschaffen. Für mich ist es die perfekte Kombination aus Logik, Innovation und Teamarbeit – angetrieben von einer ausgeprägten Problemlösungskompetenz.',
      en: 'I am passionate about coding because it allows me to combine analytical thinking with creativity to build solutions that make a real impact. I enjoy breaking down complex problems, exploring different approaches, and collaborating with others to find the best path forward. Coding challenges me to be persistent and constantly learn, while also giving me the freedom to create. For me, it is the perfect blend of logic, innovation, and teamwork — all driven by a strong problem-solving mindset.',
    },
     Name: {
      de: 'Ihr Name',
      en: 'Your name',
    },
      Email: {
      de: 'Ihre Email',
      en: 'Your Email',
    },
      Message: {
      de: 'Ihre Nachricht',
      en: 'Your Message',
    },
  };

  constructor() {
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
