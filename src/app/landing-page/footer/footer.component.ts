import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  GitHubSrc: string = 'img/buttons/Github button footer.png';
  EMailSrc: string = 'img/buttons/Email button footer.png';
  LinkedInSrc: string = 'img/buttons/Linkedin button footer.png';

  GitHubEnter(): void {
    this.GitHubSrc = 'img/buttons/Github button footer hover.png';
  }

  GitHubLeave(): void {
    this.GitHubSrc = 'img/buttons/Github button footer.png';
  }

  EMailEnter(): void {
    this.EMailSrc = 'img/buttons/EMail button footer hover.png';
  }

  EMailLeave(): void {
    this.EMailSrc = 'img/buttons/Email button footer.png';
  }

  LinkedInEnter(): void {
    this.LinkedInSrc = 'img/buttons/Linked In button footer hover.png';
  }

  LinkedInLeave(): void {
    this.LinkedInSrc = 'img/buttons/Linkedin button footer.png';
  }
}
