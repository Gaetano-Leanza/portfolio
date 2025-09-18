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
/**
 * AtfComponent
 *
 * This component represents the "above the fold" (ATF) section of the application.
 * It manages language switching, sticky header behavior, smooth scrolling navigation,
 * interactive hover effects for UI elements, and responsive mobile menu handling.
 */
export class AtfComponent implements OnInit {
  /** Source path for the decorative shape image */
  shapeImageSrc = 'img/hero section/shape.png';
  /** Source path for the arrow image */
  arrowImageSrc = 'img/arrows/Arrow down.png';
  /** Source path for the LinkedIn button image */
  linkedinImageSrc = '/img/buttons/Linkedin button.png';
  /** Source path for the email button image */
  emailImageSrc = '/img/buttons/Email button.png';
  /** Source path for the GitHub button image */
  githubImageSrc = '/img/buttons/Github button.png';
  /** Source path for the German language icon */
  germanImageSrc = 'img/change language/DE.png';
  /** Source path for the English language icon */
  englishImageSrc = 'img/change language/EN.png';

  /** Currently active language */
  currentLanguage = 'en';
  /** State of the mobile menu (open/closed) */
  isMobileMenuOpen = false;
  /** State of the sticky header */
  isHeaderSticky = false;
  /** Vertical offset of the header element */
  private headerOffset = 0;
  /** Height of the header element */
  private headerHeight = 0;
  /** Flag to check if header position is initialized */
  private isInitialized = false;

  /**
   * Creates an instance of AtfComponent.
   * @param languageService Service to manage language switching
   * @param elementRef Reference to the component's DOM element
   * @param router Angular Router for navigation checks
   */
  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  /** Initializes the component and sets the default language */
  ngOnInit() {
    this.currentLanguage = 'en';
  }

  /** Runs after the view has been initialized and sets up header position if on homepage */
  ngAfterViewInit() {
    if (this.router.url === '/') {
      this.initializeHeaderPosition();
    }
  }

  /**
   * Attempts multiple times to initialize the header position
   * to ensure layout stability after rendering delays.
   */
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

  /**
   * Calculates the header position and height for sticky header behavior.
   */
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

  /** Toggles the mobile menu open/closed state */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Scrolls smoothly to a given section by its element ID.
   * @param section The ID of the target section
   */
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
  }

  /**
   * Switches the application language and updates the current language state.
   * @param language The language to switch to ('de' or 'en')
   */
  switchLanguage(language: 'de' | 'en'): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = language;
  }

  /** Opens the default email client with a predefined email address */
  handleEmailClick(): void {
    window.location.href = 'mailto:gaetano1981@live.de';
  }

  /** Opens the GitHub profile in a new tab */
  handleGithubClick(): void {
    window.open('https://github.com/gaetano-leanza', '_blank');
  }

  /** Opens the LinkedIn profile in a new tab */
  handleLinkedinClick(): void {
    window.open('https://linkedin.com/in/gaetano-leanza', '_blank');
  }

  /** Opens an alternative GitHub profile in a new tab */
  openGitHub(): void {
    window.open('https://github.com/Gaetano-Leanza', '_blank');
  }

  /** Opens an alternative LinkedIn profile in a new tab */
  openLinkedIn(): void {
    window.open(
      'https://www.linkedin.com/in/gaetano-leanza-73a199364/',
      '_blank'
    );
  }

  /**
   * Listens for document clicks and closes the mobile menu
   * if a click happens outside of the burger menu or mobile nav.
   * @param event The click event
   */
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

  /**
   * Listens for the Escape key and closes the mobile menu if open.
   * @param event Keyboard event
   */
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  /**
   * Listens for scroll events and toggles sticky header behavior
   * depending on the scroll position.
   */
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

  /**
   * Listens for window resize events and recalculates the header position.
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isInitialized = false;
    setTimeout(() => {
      this.calculateHeaderPosition();
    }, 100);
  }

  /** Changes the shape image on mouse enter */
  onShapeMouseEnter() {
    this.shapeImageSrc = 'img/hero section/Property 1=hover.png';
  }

  /** Restores the shape image on mouse leave */
  onShapeMouseLeave() {
    this.shapeImageSrc = 'img/hero section/shape.png';
  }

  /** Changes the arrow image on mouse enter */
  onArrowMouseEnter() {
    this.arrowImageSrc = 'img/arrows/Arrow down hover.png';
  }

  /** Restores the arrow image on mouse leave */
  onArrowMouseLeave() {
    this.arrowImageSrc = 'img/arrows/Arrow down.png';
  }

  /** Changes the LinkedIn button image on mouse enter */
  onLinkedinMouseEnter() {
    this.linkedinImageSrc = '/img/buttons/Linkedinbuttonblue.png';
  }

  /** Restores the LinkedIn button image on mouse leave */
  onLinkedinMouseLeave() {
    this.linkedinImageSrc = '/img/buttons/Linkedin button.png';
  }

  /** Changes the email button image on mouse enter */
  onEmailMouseEnter() {
    this.emailImageSrc = '/img/buttons/Email buttonblue.png';
  }

  /** Restores the email button image on mouse leave */
  onEmailMouseLeave() {
    this.emailImageSrc = 'img/buttons/Email button.png';
  }

  /** Changes the GitHub button image on mouse enter */
  onGithubMouseEnter() {
    this.githubImageSrc = 'img/buttons/Guthubbuttonblue.png';
  }

  /** Restores the GitHub button image on mouse leave */
  onGithubMouseLeave() {
    this.githubImageSrc = 'img/buttons/Github button.png';
  }

  /** Changes the German flag icon on mouse enter */
  onGermanMouseEnter() {
    this.germanImageSrc = 'img/change language/DE hover.png';
  }

  /** Restores the German flag icon on mouse leave */
  onGermanMouseLeave() {
    this.germanImageSrc = 'img/change language/DE.png';
  }

  /** Changes the English flag icon on mouse enter */
  onEnglishMouseEnter() {
    this.englishImageSrc = 'img/change language/EN hover.png';
  }

  /** Restores the English flag icon on mouse leave */
  onEnglishMouseLeave() {
    this.englishImageSrc = 'img/change language/EN.png';
  }

  /**
   * Scrolls smoothly to the next section when the arrow is clicked.
   */
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

  /**
   * Returns the correct image source for a language icon
   * based on the currently active language.
   * @param lang The language ('de' or 'en')
   * @returns The image source path
   */
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
