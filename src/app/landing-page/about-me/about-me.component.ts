import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
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

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private scrollWrapper: HTMLElement | null = null;
  private eventListeners: Array<{ element: HTMLElement | Document, event: string, handler: (e: any) => void }> = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Kleine Verzögerung, um sicherzustellen, dass DOM bereit ist
    setTimeout(() => {
      this.initializeScrolling();
    }, 100);
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private initializeScrolling() {
    this.scrollWrapper = this.elementRef.nativeElement.querySelector('.scroll-wrapper');
    
    if (!this.scrollWrapper) {
      console.warn('Scroll wrapper not found');
      return;
    }

    console.log('Initializing scroll functionality');
    
    // Event-Handler binden
    this.addEventListeners();
  }

  private addEventListeners() {
    if (!this.scrollWrapper) return;

    // Mouse Events
    const mouseDownHandler = (e: MouseEvent) => this.startDrag(e);
    const mouseMoveHandler = (e: MouseEvent) => {
      if (this.isDragging) this.drag(e);
    };
    const mouseUpHandler = () => this.stopDrag();

    this.scrollWrapper.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Event-Listener für Cleanup speichern
    this.eventListeners.push(
      { element: this.scrollWrapper, event: 'mousedown', handler: mouseDownHandler },
      { element: document, event: 'mousemove', handler: mouseMoveHandler },
      { element: document, event: 'mouseup', handler: mouseUpHandler }
    );

    // Touch Events (nur wenn Touch-Device erkannt wird)
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
    if (!this.scrollWrapper) return;

    this.isDragging = true;
    
    // Verhindere Standardverhalten
    e.preventDefault();
    
    const rect = this.scrollWrapper.getBoundingClientRect();
    
    if (e instanceof MouseEvent) {
      this.startX = e.clientX - rect.left;
    } else if (e.touches && e.touches.length > 0) {
      this.startX = e.touches[0].clientX - rect.left;
    }

    this.scrollLeft = this.scrollWrapper.scrollLeft;
    this.scrollWrapper.style.cursor = 'grabbing';
    
    // Verhindere Textauswahl während des Ziehens
    document.body.style.userSelect = 'none';
  }

  private drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging || !this.scrollWrapper) return;

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

    const walk = (currentX - this.startX) * 2; // Multiplikator für Scroll-Geschwindigkeit
    this.scrollWrapper.scrollLeft = this.scrollLeft - walk;
  }

  private stopDrag() {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    
    if (this.scrollWrapper) {
      this.scrollWrapper.style.cursor = 'grab';
    }
    
    // Textauswahl wieder aktivieren
    document.body.style.userSelect = '';
  }

  private cleanup() {
    // Alle Event-Listener entfernen
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];
    
    // Timeouts clearen
    if (this.hoverTimeoutLeft) clearTimeout(this.hoverTimeoutLeft);
    if (this.hoverTimeoutMiddle) clearTimeout(this.hoverTimeoutMiddle);
    if (this.hoverTimeoutRight) clearTimeout(this.hoverTimeoutRight);
  }

  // Hover-Effekte (unverändert)
  onShapeLeftMouseEnter(): void {
    this.hoverTimeoutLeft = setTimeout(() => {
      this.shapeImageLeftSrc = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeLeftMouseLeave(): void {
    clearTimeout(this.hoverTimeoutLeft);
    this.shapeImageLeftSrc = 'img/about me/Ellipse 02.png';
  }

  onShapeMiddleMouseEnter(): void {
    this.hoverTimeoutMiddle = setTimeout(() => {
      this.shapeImageLeftSrc2 = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeMiddleMouseLeave(): void {
    clearTimeout(this.hoverTimeoutMiddle);
    this.shapeImageLeftSrc2 = 'img/about me/Ellipse 02.png';
  }

  onShapeRightMouseEnter(): void {
    this.hoverTimeoutRight = setTimeout(() => {
      this.shapeImageLeftSrc3 = 'img/about me/Ellipse 02-hover.png';
    }, 50);
  }

  onShapeRightMouseLeave(): void {
    clearTimeout(this.hoverTimeoutRight);
    this.shapeImageLeftSrc3 = 'img/about me/Ellipse 02.png';
  }
}