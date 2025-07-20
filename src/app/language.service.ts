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
    LegalNotice: {
      de: 'Impressum',
      en: 'Legal notice',
    },
    aboutProject: {
      de: 'Über das Projekt',
      en: 'About the Project',
    },
    duration1: {
      de: 'Dauer: 3 Wochen',
      en: 'Duration: 3 weeks',
    },
     duration2: {
      de: 'Dauer: 2 Wochen',
      en: 'Duration: 2 weeks',
    },
     duration3: {
      de: 'Dauer: 4 Wochen',
      en: 'Duration: 4 weeks',
    },
     duration4: {
      de: 'Dauer: 1 Wochen',
      en: 'Duration: 1 weeks',
    },
    organise: {
      de: 'Wie ich meinen Arbeitsprozess organisiert habe',
      en: 'How I have organiesed my work process',
    },
    experience: {
      de: 'Meine Erfahrung in der Gruppenarbeit',
      en: 'My group work experience',
    },
    aboutProjectBubble: {
      de: 'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeitnachrichten und eine leistungsstarke Kanalorganisation.',
      en: ' This App is a Slack Clone App. It revolutionizes team communication and colloabaration with its intuitive interface, real-time messaging, and robust channel organnization.',
    },
    Text: {
      de: 'Ich halte meinen Code sauber und wartbar, indem ich Best Practices befolge – dazu gehören klare Benennungen von Dateien, Variablen und Klassen. Ich zerlege Projekte in wiederverwendbare Module und Komponenten, um Skalierbarkeit zu gewährleisten.',
      en: 'I keep my code clean and maintainable by following best practices like clear naming for files, variables, and classes. I break down projects into reusable modules and components to ensure scalability.',
    },
    Text2: {
      de: 'Wir waren ein Team von vier Personen. Ich war für die Umsetzung des Login-Formulars und der Chat-Funktionalität verantwortlich. Wir haben Angular, Firebase und SCSS verwendet.',
      en: 'We were a team of four people. I was responsible for implementing the login form and the chat functionality. We used Angular, Firebase, and SCSS.',
    },

    aboutProjectPollo: {
      de: 'Diese App ist ein 2-D Jump and Run Spiel. Mit dem Avatar Pepe sammelt man Salsa-Flaschen und wirf sie auf verrückte Hühne und am Ende wartet noch ein Endgegner auf einen.',
      en: 'This app is a 2D jump-and-run game. With the avatar Pepe, you collect salsa bottles and throw them at crazy chickens, and in the end, a final boss is waiting for you.',
    },
    TextPollo: {
      de: 'Ich habe meinen Code sauber und wartbar gehlaten, indem ich den Code suaber und strukturiert in verschiedene Klassen ausgelagert habe mit klaren Benennungen.',
      en: 'I kept my code clean and maintainable by organizing it into well-structured classes with clear naming.',
    },
    Text2Pollo: {
      de: 'Wir waren ein Team von vier Personen. Ich war für die Umsetzung des Login-Formulars und der Chat-Funktionalität verantwortlich. Wir haben Angular, Firebase und SCSS verwendet.',
      en: 'We were a team of four people. I was responsible for implementing the login form and the chat functionality. We used Angular, Firebase, and SCSS.',
    },

    
    aboutProjectJoin: {
      de: 'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeitnachrichten und eine leistungsstarke Kanalorganisation.',
      en: ' This App is a Slack Clone App. It revolutionizes team communication and colloabaration with its intuitive interface, real-time messaging, and robust channel organnization.',
    },
    TextJoin: {
      de: 'Ich halte meinen Code sauber und wartbar, indem ich Best Practices befolge – dazu gehören klare Benennungen von Dateien, Variablen und Klassen. Ich zerlege Projekte in wiederverwendbare Module und Komponenten, um Skalierbarkeit zu gewährleisten.',
      en: 'I keep my code clean and maintainable by following best practices like clear naming for files, variables, and classes. I break down projects into reusable modules and components to ensure scalability.',
    },
    Text2Join: {
      de: 'Wir waren ein Team von vier Personen. Ich war für die Umsetzung des Login-Formulars und der Chat-Funktionalität verantwortlich. Wir haben Angular, Firebase und SCSS verwendet.',
      en: 'We were a team of four people. I was responsible for implementing the login form and the chat functionality. We used Angular, Firebase, and SCSS.',
    },

    
    aboutProjectPokedex: {
      de: 'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeitnachrichten und eine leistungsstarke Kanalorganisation.',
      en: ' This App is a Slack Clone App. It revolutionizes team communication and colloabaration with its intuitive interface, real-time messaging, and robust channel organnization.',
    },
    TextPokedex: {
      de: 'Ich halte meinen Code sauber und wartbar, indem ich Best Practices befolge – dazu gehören klare Benennungen von Dateien, Variablen und Klassen. Ich zerlege Projekte in wiederverwendbare Module und Komponenten, um Skalierbarkeit zu gewährleisten.',
      en: 'I keep my code clean and maintainable by following best practices like clear naming for files, variables, and classes. I break down projects into reusable modules and components to ensure scalability.',
    },
    Text2Pokedex: {
      de: 'Wir waren ein Team von vier Personen. Ich war für die Umsetzung des Login-Formulars und der Chat-Funktionalität verantwortlich. Wir haben Angular, Firebase und SCSS verwendet.',
      en: 'We were a team of four people. I was responsible for implementing the login form and the chat functionality. We used Angular, Firebase, and SCSS.',
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
