import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements AfterViewInit {
  shapeImageLeftSrc: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc2: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc3: string = 'img/about me/Ellipse 02.png';
  hoverTimeoutLeft: any;
  hoverTimeoutMiddle: any;
  hoverTimeoutRight: any;

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private listenersBound = false;

  ngAfterViewInit() {
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    if (!scrollWrapper || this.listenersBound) return;

    console.log('Scroll wrapper found!');
    this.listenersBound = true;

    // Mouse Events
    scrollWrapper.addEventListener('mousedown', (e) => {
      this.startDrag(e);
    });

    document.addEventListener('mousemove', (e) => {
      if (this.isDragging) this.drag(e);
    });

    document.addEventListener('mouseup', () => this.stopDrag());

    // Touch Events (nur auf scrollWrapper, mit passive: false)
    scrollWrapper.addEventListener('touchstart', (e) => {
      this.startDrag(e);
    });

    scrollWrapper.addEventListener('touchmove', (e) => {
      if (this.isDragging) this.drag(e);
    }, { passive: false });

    document.addEventListener('touchend', () => this.stopDrag());
  }

  private startDrag(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;

    if (!scrollWrapper) return;

    if (e instanceof MouseEvent) {
      this.startX = e.pageX - scrollWrapper.offsetLeft;
    } else {
      this.startX = e.touches[0].pageX - scrollWrapper.offsetLeft;
    }

    this.scrollLeft = scrollWrapper.scrollLeft;
    scrollWrapper.style.cursor = 'grabbing';

    e.preventDefault();
  }

  private drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    if (!scrollWrapper) return;

    let x: number;
    if (e instanceof MouseEvent) {
      x = e.pageX - scrollWrapper.offsetLeft;
    } else {
      x = e.touches[0].pageX - scrollWrapper.offsetLeft;
    }

    const walk = (x - this.startX) * 2;
    scrollWrapper.scrollLeft = this.scrollLeft - walk;

    e.preventDefault(); // Blockt z.B. Seite nach unten wischen
  }

  private stopDrag() {
    this.isDragging = false;
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    if (scrollWrapper) {
      scrollWrapper.style.cursor = 'grab';
    }
  }

  // Hover-Effekte
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
