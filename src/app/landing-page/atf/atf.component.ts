import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-atf',
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
})
export class AtfComponent {
  shapeImageSrc = 'img/hero section/shape.png';
  arrowImageSrc = 'img/arrows/Arrow down.png';
  linkedinImageSrc = '/img/buttons/Linkedin button.png';
  emailImageSrc = '/img/buttons/Email button.png';
  githubImageSrc = '/img/buttons/Github button.png';
  germanImageSrc = 'img/change language/DE.png';
  englishImageSrc = 'img/change language/EN.png';
  isMobileMenuOpen: boolean = false;
  isHeaderSticky = false;
  private headerOffset = 0;
  private headerHeight = 0;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const headerElement =
        this.elementRef.nativeElement.querySelector('.bottom-container');
      if (headerElement) {
        this.headerOffset = headerElement.offsetTop;
        this.headerHeight = headerElement.offsetHeight;
      }
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

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateTo(section: string): void {
    const targetElement = document.getElementById(section);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    this.isMobileMenuOpen = false;
  }

  handleEmailClick(): void {
    window.location.href = 'mailto:gaetano1981@live.de';
    this.isMobileMenuOpen = false;
  }

  handleGithubClick(): void {
    window.open('https://github.com/gaetano-leanza', '_blank');
    this.isMobileMenuOpen = false;
  }

  handleLinkedinClick(): void {
    window.open('https://linkedin.com/in/gaetano-leanza', '_blank');
    this.isMobileMenuOpen = false;
  }

  switchLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
    this.isMobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const burgerMenu = document.querySelector('.burger-menu');

    if (burgerMenu && !burgerMenu.contains(target) && this.isMobileMenuOpen) {
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
    const shouldBeSticky = window.pageYOffset >= this.headerOffset;

    if (shouldBeSticky !== this.isHeaderSticky) {
      this.isHeaderSticky = shouldBeSticky;

      if (this.isHeaderSticky) {
        document.body.style.paddingTop = `${this.headerHeight}px`;
      } else {
        document.body.style.paddingTop = '0';
      }
    }
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
}
