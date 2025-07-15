import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  shapeImageLeftSrc: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc2: string = 'img/about me/Ellipse 02.png';
  shapeImageLeftSrc3: string = 'img/about me/Ellipse 02.png';
  hoverTimeoutLeft: any;
  hoverTimeoutMiddle: any;
  hoverTimeoutRight: any;

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
