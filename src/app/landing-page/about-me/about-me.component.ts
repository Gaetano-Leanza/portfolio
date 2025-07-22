import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Inject,
  PLATFORM_ID,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../../app/language.service';
import { TranslatePipe } from '../../../app/translate.pipe';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  shapeImageLeftSrc: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc2: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc3: string = 'img/about me/Ellipse 02.png';

  hoverTimeoutLeft: any;
  hoverTimeoutMiddle: any;
  hoverTimeoutRight: any;

  currentLanguage = 'en';
  mobileImageSrc: string = '';

  isMobileMenuOpen: boolean = false;

  private languageSubscription: Subscription = new Subscription();
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private scrollWrapper: HTMLElement | null = null;
  private eventListeners: Array<{
    element: HTMLElement | Document;
    event: string;
    handler: (e: any) => void;
  }> = [];

  constructor(
    private elementRef: ElementRef,
    private languageService: LanguageService,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateMobileImageSrc(this.currentLanguage);

    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (language) => {
        this.currentLanguage = language;
        this.updateMobileImageSrc(language);
      }
    );
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initializeScrolling();
      }, 100);
    }
  }

  ngOnDestroy() {
    this.cleanup();
    this.languageSubscription.unsubscribe();
  }

  private updateMobileImageSrc(language: string) {
    if (language === 'de') {
      this.mobileImageSrc = 'img/about me/moblie-deutsch.png';
    } else {
      this.mobileImageSrc = 'img/about me/mobile-english.png';
    }
  }

  // Drag Scroll
  private initializeScrolling() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scrollWrapper = this.elementRef.nativeElement.querySelector('.scroll-wrapper');
    if (!this.scrollWrapper) return;

    this.addEventListeners();
  }

  private addEventListeners() {
    if (!this.scrollWrapper || !isPlatformBrowser(this.platformId)) return;

    const mouseDownHandler = (e: MouseEvent) => this.startDrag(e);
    const mouseMoveHandler = (e: MouseEvent) => {
      if (this.isDragging) this.drag(e);
    };
    const mouseUpHandler = () => this.stopDrag();

    this.scrollWrapper.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    this.eventListeners.push(
      { element: this.scrollWrapper, event: 'mousedown', handler: mouseDownHandler },
      { element: document, event: 'mousemove', handler: mouseMoveHandler },
      { element: document, event: 'mouseup', handler: mouseUpHandler }
    );

    if ('ontouchstart' in window) {
      const touchStartHandler = (e: TouchEvent) => this.startDrag(e);
      const touchMoveHandler = (e: TouchEvent) => {
        if (this.isDragging) this.drag(e);
      };
      const touchEndHandler = () => this.stopDrag();

      this.scrollWrapper.addEventListener('touchstart', touchStartHandler, { passive: false });
      this.scrollWrapper.addEventListener('touchmove', touchMoveHandler, { passive: false });
      this.scrollWrapper.addEventListener('touchend', touchEndHandler);

      this.eventListeners.push(
        { element: this.scrollWrapper, event: 'touchstart', handler: touchStartHandler },
        { element: this.scrollWrapper, event: 'touchmove', handler: touchMoveHandler },
        { element: this.scrollWrapper, event: 'touchend', handler: touchEndHandler }
      );
    }
  }

  private startDrag(e: MouseEvent | TouchEvent) {
    if (!this.scrollWrapper || !isPlatformBrowser(this.platformId)) return;

    this.isDragging = true;
    e.preventDefault();

    const rect = this.scrollWrapper.getBoundingClientRect();

    if (e instanceof MouseEvent) {
      this.startX = e.clientX - rect.left;
    } else if (e.touches && e.touches.length > 0) {
      this.startX = e.touches[0].clientX - rect.left;
    }

    this.scrollLeft = this.scrollWrapper.scrollLeft;
    this.scrollWrapper.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  }

  private drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging || !this.scrollWrapper || !isPlatformBrowser(this.platformId)) return;

    e.preventDefault();
    const rect = this.scrollWrapper.getBoundingClientRect();
    let currentX: number;

    if (e instanceof MouseEvent) {
      currentX = e.clientX - rect.left;
    } else if (e.touches && e.touches.length > 0) {
      currentX = e.touches[0].clientX - rect.left;
    } else {
      return;
    }

    const walk = (currentX - this.startX) * 2;
    this.scrollWrapper.scrollLeft = this.scrollLeft - walk;
  }

  private stopDrag() {
    if (!this.isDragging || !isPlatformBrowser(this.platformId)) return;

    this.isDragging = false;
    if (this.scrollWrapper) this.scrollWrapper.style.cursor = 'grab';
    document.body.style.userSelect = '';
  }

  private cleanup() {
    if (isPlatformBrowser(this.platformId)) {
      this.eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
      });
    }
    this.eventListeners = [];

    if (this.hoverTimeoutLeft) clearTimeout(this.hoverTimeoutLeft);
    if (this.hoverTimeoutMiddle) clearTimeout(this.hoverTimeoutMiddle);
    if (this.hoverTimeoutRight) clearTimeout(this.hoverTimeoutRight);
  }

  // Hover-Logiken
  onShapeLeftMouseEnter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.hoverTimeoutLeft = setTimeout(() => {
      this.shapeImageLeftSrc = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeLeftMouseLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    clearTimeout(this.hoverTimeoutLeft);
    this.shapeImageLeftSrc = 'img/about me/Ellipse 02.png';
  }

  onShapeMiddleMouseEnter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.hoverTimeoutMiddle = setTimeout(() => {
      this.shapeImageLeftSrc2 = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeMiddleMouseLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    clearTimeout(this.hoverTimeoutMiddle);
    this.shapeImageLeftSrc2 = 'img/about me/Ellipse 02.png';
  }

  onShapeRightMouseEnter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.hoverTimeoutRight = setTimeout(() => {
      this.shapeImageLeftSrc3 = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeRightMouseLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    clearTimeout(this.hoverTimeoutRight);
    this.shapeImageLeftSrc3 = 'img/about me/Ellipse 02.png';
  }

  switchLanguage(language: 'de' | 'en'): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = language;
    this.updateMobileImageSrc(language);
    this.isMobileMenuOpen = false;
  }
}
