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

  // Drag-to-Scroll Properties
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    // Timeout hinzufügen, um sicherzustellen, dass DOM vollständig geladen ist
    setTimeout(() => {
      const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
      
      if (scrollWrapper) {
        console.log('Scroll wrapper found!'); // Debug
        
        // Mouse Events
        scrollWrapper.addEventListener('mousedown', (e) => {
          console.log('Mouse down detected'); // Debug
          this.startDrag(e);
        });
        
        // Diese Events müssen auf document sein, nicht auf dem Element
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.stopDrag());
        
        // Touch Events für mobile Geräte
        scrollWrapper.addEventListener('touchstart', (e) => {
          console.log('Touch start detected'); // Debug
          this.startDrag(e);
        });
        document.addEventListener('touchmove', (e) => this.drag(e));
        document.addEventListener('touchend', () => this.stopDrag());
      } else {
        console.log('Scroll wrapper NOT found!'); // Debug
      }
    }, 100);
  }

  private startDrag(e: MouseEvent | TouchEvent) {
    console.log('Start drag called'); // Debug
    this.isDragging = true;
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    
    if (scrollWrapper) {
      if (e instanceof MouseEvent) {
        this.startX = e.pageX - scrollWrapper.offsetLeft;
      } else {
        this.startX = e.touches[0].pageX - scrollWrapper.offsetLeft;
      }
      
      this.scrollLeft = scrollWrapper.scrollLeft;
      scrollWrapper.style.cursor = 'grabbing';
      
      // Verhindere Standardverhalten
      e.preventDefault();
    }
  }

  private drag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    console.log('Dragging...'); // Debug
    e.preventDefault();
    
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    if (!scrollWrapper) return;
    
    let x: number;
    if (e instanceof MouseEvent) {
      x = e.pageX - scrollWrapper.offsetLeft;
    } else {
      x = e.touches[0].pageX - scrollWrapper.offsetLeft;
    }
    
    const walk = (x - this.startX) * 2; // Multiplikator für Scroll-Geschwindigkeit
    scrollWrapper.scrollLeft = this.scrollLeft - walk;
  }

  private stopDrag() {
    console.log('Stop drag called'); // Debug
    this.isDragging = false;
    const scrollWrapper = document.querySelector('.scroll-wrapper') as HTMLElement;
    if (scrollWrapper) {
      scrollWrapper.style.cursor = 'grab';
    }
  }

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