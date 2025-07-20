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
    witchProject: {
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
    privacyNotice: {
      de: 'Ich habe die <span class="highlight">Datenschutzerklärung</span> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      en: 'I have read the <span class="highlight">privacy policy</span> and agree to the processing of my data as outlined.',
    },
    offerMe: {
      de: 'Zögern Sie nicht, mich bei Jobangeboten oder spannenden Projekten zu kontaktieren – zum Beispiel in den Bereichen Projektmanagement, kreative Entwicklung oder Beratung. Ich freue mich darauf, meine Fähigkeiten und Erfahrungen einzubringen, um Ihre Projekte voranzubringen und gemeinsam erfolgreiche Ergebnisse zu erzielen. Lassen Sie uns etwas Großartiges schaffen!',
      en: 'Feel free to get in touch with job offers or opportunities in roles such as project management, creative development, or consulting. I am eager to contribute my skills and experience to help bring your projects to life and deliver meaningful results. Let us collaborate to create something great together!',
    },
    work: {
      de: 'Lass uns zusammen arbeiten!',
      en: 'Let us work togehter!',
    },
    teamplayer: {
      de: 'Auf der Suche nach einem Teamplayer?',
      en: 'Need a teamplayer?',
    },
    comment1: {
      de: '"Gaetano musste Inhalte gemeinsam mit den Teammitgliedern entwickeln, aufbereiten und bereitstellen. Er ist eine zuverlässige und freundliche Person."',
      en: '"Gaetano had to develop, format and deliver content in collaboration with the team members. He is as reliable and friendlsy person."',
    },
    comment2: {
      de: '"Gaetano ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt klaren, sauberen Code. Ich empfehle ihn als Kollegen weiter."',
      en: '"Gaetano is a reliable and freindly person. Works in a structured way and write a clear code. I recommend him as a colleague."',
    },
    comment3: {
      de: '„Er ist ein verlässlicher Teamplayer, der auch unter Termindruck einen kühlen Kopf bewahrt. Seine Arbeitsweise ist strukturiert, sein Code klar und sauber.“',
      en: '"He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work an clear code."',
    },
    LegalNotice:  {
      de: 'Impressum',
      en: 'Legal notice',
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
