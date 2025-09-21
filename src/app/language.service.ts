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
      de: 'Diese App ist ein 2-D Jump and Run Spiel. Mit dem Avatar Pepe sammelt man Salsa-Flaschen, wirft sie auf verrückte Hühner, und am Ende wartet ein Endgegner.',
      en: 'This app is a 2-D jump-and-run game. With the avatar Pepe, players collect salsa bottles, throw them at crazy chickens, and finally face a boss enemy.',
    },
    TextPollo: {
      de: 'Für mein Projekt habe ich objektorientiert gearbeitet und den Code in klar strukturierte Module aufgeteilt. Mit JavaScript habe ich die Logik umgesetzt, wobei ich Klassen und Methoden nutzte, um wiederverwendbare und übersichtliche Strukturen zu schaffen. HTML diente als Grundlage für die Inhalte, während ich mit CSS das Layout und Design gestaltet habe. Durch diese Trennung konnte ich effizient arbeiten, Änderungen gezielt umsetzen und den Überblick über den gesamten Entwicklungsprozess behalten.',
      en: 'For my project, I worked with an object-oriented approach and divided the code into clearly structured modules. Using JavaScript, I implemented the logic by leveraging classes and methods to create reusable and well-organized structures. HTML served as the foundation for the content, while CSS was used to design the layout and styling. This separation allowed me to work efficiently, implement changes in a targeted way, and maintain a clear overview of the entire development process.',
    },
    aboutProjectJoin: {
      de: 'Dieses Kanbanboard entstand im Rahmen einer Gruppenarbeit. Zum Einsatz kamen Angular mit TypeScript und SCSS für das Frontend sowie Firebase für das Backend. Zusätzlich konnten wir Einblicke in professionelle Teamarbeit mit Scrum gewinnen und Tools wie Git und Figma einsetzen.',
      en: 'This Kanban board was developed as part of a group project. We used Angular with TypeScript and SCSS for the frontend and Firebase for the backend. In addition, we gained insights into professional teamwork with Scrum and worked with tools such as Git and Figma.',
    },
    TextJoin: {
      de: 'Ich habe meinen Code sauber und wartbar gehalten, indem ich Best Practices wie klare Benennungen von Dateien, Variablen und Klassen befolgte. Durch die Aufteilung in wiederverwendbare Module und Komponenten konnte ich die Struktur übersichtlich gestalten und eine gute Skalierbarkeit sicherstellen.',
      en: 'I kept my code clean and maintainable by following best practices such as clear naming of files, variables, and classes. By dividing the project into reusable modules and components, I was able to create a well-structured architecture and ensure good scalability.',
    },
    Text2Join: {
      de: 'Mein Schwerpunkt lag auf der Umsetzung des Login-Formulars sowie der Funktion zur Erstellung von Tasks. Dabei profitierte ich sowohl von der Zusammenarbeit im Team als auch vom praktischen Einsatz moderner Webtechnologien.',
      en: 'My focus was on implementing the login form as well as the task creation functionality. Through this, I benefited both from team collaboration and from the practical use of modern web technologies.',
    },
    aboutProjectPokedex: {
      de: 'Das Pokédex ist ein digitales Lexikon, das Informationen über verschiedene Pokémon enthält – wie Name, Typ, Fähigkeiten und Entwicklungsstufen. Dabei wurde die Pokémon API (PokéAPI) genutzt, um die Daten dynamisch abzurufen und in der Anwendung darzustellen.',
      en: 'The Pokédex is a digital encyclopedia that contains information about various Pokémon – such as name, type, abilities, and evolution stages. The Pokémon API (PokéAPI) was used to dynamically fetch and display this data within the application.',
    },
    TextPokedex: {
      de: 'Bei meinem Projekt stand die Umsetzung mit einer API im Mittelpunkt. Die Logik habe ich mit JavaScript realisiert, während HTML die Struktur vorgab und CSS für das Layout sorgte. Durch diese klare Trennung konnte ich den Arbeitsprozess effizient organisieren und die Funktionalität der API gezielt einbinden.',
      en: 'In my project, the main focus was on implementing an API. I developed the logic with JavaScript, while HTML provided the structure and CSS defined the layout. This clear separation allowed me to organize the workflow efficiently and integrate the API’s functionality in a targeted way.',
    },
    legal: {
      de: 'Angaben gemäß § 5 TMG:',
      en: 'Legal Disclosure according to § 5 TMG:',
    },
    responsible: {
      de: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:',
      en: 'Responsible for content according to § 55 (2) RStV:',
    },
    disclaimer: {
      de: 'Haftungsausschluss:',
      en: 'Disclaimer:',
    },
    disclaimerText: {
      de: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
      en: 'Despite careful content control, we assume no liability for the content of external links. The responsibility for the content of linked pages lies solely with their respective operators.',
    },
    contactText: {
      de: 'Kontakt:',
      en: 'Contact:',
    },
    dispute: {
      de: 'EU-Streitschlichtung:',
      en: 'EU Dispute Resolution',
    },
    commission: {
      de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      en: 'The European Commission provides a platform for online dispute resolution:',
    },
    imprint: {
      de: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
      en: 'Our email address can be found above in the imprint.',
    },
    privacyPolicy: {
      de: 'Datenschutzerklärung',
      en: 'privacy policy',
    },
    responsiblePerson: {
      de: '1. Verantwortlicher:',
      en: '1. Person responsible:',
    },
    generalInformation: {
      de: '2. Allgemeines zur Datenverarbeitung:',
      en: '2. General information on data processing:',
    },
    generalInformationText: {
      de: 'Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen. Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung Ihrer Anfragen erforderlich ist. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse), sofern keine speziellere Grundlage (z. B. Einwilligung) gegeben ist.',
      en: 'The protection of your personal data is very important to me. Personal data is processed only to the extent necessary for providing a functional website and for handling your inquiries. The legal basis for the processing is Article 6(1)(f) of the GDPR (legitimate interest), unless a more specific legal basis (e.g., consent) applies.',
    },
    accessData: {
      de: '3. Zugriffsdaten / Server-Logfiles:',
      en: '3. Access Data / Server Log Files:',
    },
    accessDataText: {
      de: 'Beim Besuch dieser Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt: IP-Adresse Datum und Uhrzeit der Anfrage Browsertyp und -version Betriebssystem Referrer-URL Diese Daten dienen der technischen Überwachung und Sicherheit der Website. Eine Zusammenführung mit anderen Daten erfolgt nicht.',
      en: 'When you visit this website, certain information transmitted by your browser is automatically collected. This includes your IP address, the date and time of your request, the type and version of your browser, your operating system, and the referring URL. This data is used solely for the technical monitoring and security of the website and is not combined with other data.',
    },
    contactForm: {
      de: '4. Kontaktformular:',
      en: '4. Contact Form:',
    },
    contactFormText: {
      de: 'Wenn Sie mir über das Kontaktformular schreiben, werden Ihre Angaben (Name, E-Mail, Nachricht) zum Zweck der Bearbeitung gespeichert.',
      en: 'If you contact me via the contact form, the information you provide (name, email address, message) will be stored for the purpose of processing your request.',
    },
    legalBasis: {
      de: 'Rechtsgrundlage:',
      en: 'Legal basis:',
    },
    legalBasisText: {
      de: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
      en: 'Article 6(1)(a) GDPR (consent). You may withdraw your consent at any time with effect for the future.',
    },
    socialMedia: {
      de: '5. Social Media Plugins:',
      en: '5. Social Media Plugins:',
    },
    socialMediaText: {
      de: 'Auf dieser Website können sogenannte Social Plugins verwendet werden (z. B. von Instagram, LinkedIn, Facebook). Beim Besuch einer Seite mit einem solchen Plugin kann eine Verbindung zu den Servern des jeweiligen Anbieters hergestellt werden. Bitte beachten Sie, dass dadurch personenbezogene Daten (z. B. IP-Adresse) an diese Dienste übertragen werden können – auch in Drittländer wie die USA. Mehr Informationen finden Sie in den Datenschutzerklärungen der jeweiligen Anbieter: Facebook: https://www.facebook.com/privacy/policy/ Instagram: https://privacycenter.instagram.com/ LinkedIn: https://www.linkedin.com/legal/privacy-policy',
      en: 'This website may use so-called social plugins, such as those from Instagram, LinkedIn, or Facebook. When you visit a page that includes such a plugin, your browser may establish a direct connection to the servers of the respective provider. In doing so, personal data—such as your IP address—may be transmitted to these services, potentially including transfers to third countries like the United States. For more details, please refer to the privacy policies of the respective providers: Facebook: https://www.facebook.com/privacy/policy/ Instagram: https://privacycenter.instagram.com/ LinkedIn: https://www.linkedin.com/legal/privacy-policy',
    },
    Cookies: {
      de: '6. Cookies:',
      en: '6. Cookies:',
    },
    CookiesText: {
      de: 'Diese Website verwendet technisch notwendige Cookies, um bestimmte Funktionen zu ermöglichen (z. B. Navigation, Formularschutz). Cookies werden auf Basis von Art. 6 Abs. 1 lit. f DSGVO gespeichert (berechtigtes Interesse an einer funktionierenden Website). Sie können Cookies in den Einstellungen Ihres Browsers jederzeit deaktivieren.',
      en: 'This website uses technically necessary cookies to enable certain functions (e.g., navigation, form protection). Cookies are stored on the basis of Article 6(1)(f) of the GDPR (legitimate interest in providing a functional website). You can disable cookies at any time in your browser settings.',
    },
    yourRights: {
      de: '7. Ihre Rechte:',
      en: '7. Your Rights:',
    },
    yourRightsText: {
      de: 'Sie haben nach der DSGVO folgende Rechte: Auskunft über die gespeicherten Daten (Art. 15 DSGVO) Berichtigung unrichtiger Daten (Art. 16 DSGVO) Löschung (Art. 17 DSGVO) Einschränkung der Verarbeitung (Art. 18 DSGVO) Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) Datenübertragbarkeit (Art. 20 DSGVO) Beschwerde bei einer Aufsichtsbehörde (z. B. Landesdatenschutzbeauftragter NRW):',
      en: 'Under the GDPR, you have the following rights: The right to access the data stored about you (Art. 15 GDPR), the right to rectification of inaccurate data (Art. 16 GDPR), the right to erasure (Art. 17 GDPR), the right to restriction of processing (Art. 18 GDPR), the right to object to processing (Art. 21 GDPR), the right to data portability (Art. 20 GDPR), and the right to lodge a complaint with a supervisory authority (e.g., the data protection authority of North Rhine-Westphalia).',
    },
    changes: {
      de: '8. Änderungen dieser Datenschutzerklärung:',
      en: '8. Changes to This Privacy Policy:',
    },
    changesText: {
      de: 'Ich behalte mir vor, diese Datenschutzerklärung zu aktualisieren, um sie an rechtliche Anforderungen oder Änderungen der Website anzupassen. Letzte Aktualisierung: Juli 2025',
      en: 'I reserve the right to update this privacy policy to comply with legal requirements or to reflect changes to the website. Last updated: July 2025.',
    },
    nameRequired: {
      de: 'Bitte gültigen Namen eingeben',
      en: 'Please enter a valid name',
    },
    emailRequired: {
      de: 'Bitte eine gültige Email-Adresse eingeben',
      en: 'Please enter a valid email address',
    },
    messageRequired: {
      de: 'Bitte eine gültige Textnachricht eingeben',
      en: 'Please enter a valid message',
    },
    checkboxRequired: {
      de: 'Bitte den Datenschutzbestimmungen zustimmen',
      en: 'Please agree to the privacy policy',
    },
    sendError: {
      de: 'Beim Senden ist ein Fehler aufgetreten.',
      en: 'An error occurred while sending.',
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
