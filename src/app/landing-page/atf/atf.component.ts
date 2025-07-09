import { Component } from '@angular/core';

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

}
