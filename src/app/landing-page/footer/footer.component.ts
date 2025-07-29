import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  GitHubSrc: string = 'img/buttons/Github button footer.png';
  EMailSrc: string = 'img/buttons/Email button footer.png';
  LinkedInSrc: string = 'img/buttons/Linkedin button footer.png';

  constructor(private router: Router) {}

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

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openGitHub(): void {
    window.open('https://github.com/Gaetano-Leanza', '_blank');
  }

  openLinkedIn(): void {
    window.open(
      'https://www.linkedin.com/in/gaetano-leanza-73a199364/',
      '_blank'
    );
  }

  navigateToLegalNotice(): void {
    this.router.navigate(['/legal-notice']);
  }
}
