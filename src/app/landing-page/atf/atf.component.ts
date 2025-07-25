import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { TranslatePipe } from '../../../app/translate.pipe';
import { LanguageService } from '../../../app/language.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf',
  standalone: true,
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
  imports: [TranslatePipe, CommonModule],
})
export class AtfComponent implements OnInit {
  shapeImageSrc = 'img/hero section/shape.png';
  arrowImageSrc = 'img/arrows/Arrow down.png';
  linkedinImageSrc = '/img/buttons/Linkedin button.png';
  emailImageSrc = '/img/buttons/Email button.png';
  githubImageSrc = '/img/buttons/Github button.png';
  germanImageSrc = 'img/change language/DE.png';
  englishImageSrc = 'img/change language/EN.png';

  currentLanguage = 'en';
  isMobileMenuOpen = false;
  isHeaderSticky = false;
  private headerOffset = 0;
  private headerHeight = 0;
  private isInitialized = false;

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentLanguage = 'en';
  }

  ngAfterViewInit() {
    if (this.router.url === '/') {
      this.initializeHeaderPosition();
    }
  }

  private initializeHeaderPosition() {
    const attempts = [0, 100, 300, 500];

    attempts.forEach((delay) => {
      setTimeout(() => {
        if (!this.isInitialized) {
          this.calculateHeaderPosition();
        }
      }, delay);
    });
  }

  private calculateHeaderPosition() {
    const headerElement =
      this.elementRef.nativeElement.querySelector('.bottom-container');
    if (headerElement) {
      const rect = headerElement.getBoundingClientRect();
      this.headerOffset = rect.top + window.pageYOffset;
      this.headerHeight = headerElement.offsetHeight;
      this.isInitialized = true;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
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

    // NICHT automatisch schließen
  }

  switchLanguage(language: 'de' | 'en'): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = language;

    // NICHT automatisch Menü schließen
  }

  handleEmailClick(): void {
    window.location.href = 'mailto:gaetano1981@live.de';
  }

  handleGithubClick(): void {
    window.open('https://github.com/gaetano-leanza', '_blank');
  }

  handleLinkedinClick(): void {
    window.open('https://linkedin.com/in/gaetano-leanza', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/Gaetano-Leanza', '_blank');
  }

  openLinkedIn(): void {
    window.open(
      'https://www.linkedin.com/in/gaetano-leanza-73a199364/',
      '_blank'
    );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.centered-mobile-nav');

    if (
      burgerMenu &&
      mobileNav &&
      !burgerMenu.contains(target) &&
      !mobileNav.contains(target) &&
      this.isMobileMenuOpen
    ) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.isInitialized) {
      this.calculateHeaderPosition();
      return;
    }

    const scrollY = window.pageYOffset;
    const shouldBeSticky = scrollY >= this.headerOffset;

    if (shouldBeSticky !== this.isHeaderSticky) {
      this.isHeaderSticky = shouldBeSticky;
      document.body.style.paddingTop = shouldBeSticky
        ? `${this.headerHeight}px`
        : '0';
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isInitialized = false;
    setTimeout(() => {
      this.calculateHeaderPosition();
    }, 100);
  }

  onShapeMouseEnter() {
    this.shapeImageSrc = 'img/hero section/Property 1=hover.png';
  }

  onShapeMouseLeave() {
    this.shapeImageSrc = 'img/hero section/shape.png';
  }

  onArrowMouseEnter() {
    this.arrowImageSrc = 'img/arrows/Arrow down hover.png';
  }

  onArrowMouseLeave() {
    this.arrowImageSrc = 'img/arrows/Arrow down.png';
  }

  onLinkedinMouseEnter() {
    this.linkedinImageSrc = '/img/buttons/Linkedinbuttonblue.png';
  }

  onLinkedinMouseLeave() {
    this.linkedinImageSrc = '/img/buttons/Linkedin button.png';
  }

  onEmailMouseEnter() {
    this.emailImageSrc = '/img/buttons/Email buttonblue.png';
  }

  onEmailMouseLeave() {
    this.emailImageSrc = 'img/buttons/Email button.png';
  }

  onGithubMouseEnter() {
    this.githubImageSrc = 'img/buttons/Guthubbuttonblue.png';
  }

  onGithubMouseLeave() {
    this.githubImageSrc = 'img/buttons/Github button.png';
  }

  onGermanMouseEnter() {
    this.germanImageSrc = 'img/change language/DE hover.png';
  }

  onGermanMouseLeave() {
    this.germanImageSrc = 'img/change language/DE.png';
  }

  onEnglishMouseEnter() {
    this.englishImageSrc = 'img/change language/EN hover.png';
  }

  onEnglishMouseLeave() {
    this.englishImageSrc = 'img/change language/EN.png';
  }

  onArrowClick(): void {
    const nextSection = document.querySelector(
      '.middle-section, .bottom-container'
    );
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  getImageSrc(lang: 'de' | 'en'): string {
    if (lang === 'de') {
      return this.currentLanguage === 'de'
        ? 'img/change language/DE hover.png' 
        : 'img/change language/DE.png'; 
    } else {
      return this.currentLanguage === 'en'
        ? 'img/change language/EN hover.png'
        : 'img/change language/EN.png';
    }
  }
}
