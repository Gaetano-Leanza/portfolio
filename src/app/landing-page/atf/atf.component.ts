import { Component } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  shapeImageSrc = '/img/hero section/shape.png';
  arrowImageSrc = '/img/arrows/Arrow down.png';

  onShapeMouseEnter() {
    this.shapeImageSrc = '/img/hero%20section/Property%201=hover.png';
  }

  onShapeMouseLeave() {
    this.shapeImageSrc = '/img/hero%20section/shape.png';
  }

  onArrowMouseEnter() {
    this.arrowImageSrc = '/img/arrows/Arrow down hover.png';
  }

  onArrowMouseLeave() {
    this.arrowImageSrc = '/img/arrows/Arrow down.png';
  }
}