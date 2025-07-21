import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './landing-page/footer/footer.component';
import { LegalNoticeComponent } from './landing-page/legal-notice/legal-notice.component';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from "./landing-page/contact-me/contact-me.component";
import { MyProjectsComponent } from "./landing-page/my-projects/my-projects.component";
import { AboutMeComponent } from "./landing-page/about-me/about-me.component";
import { MySkillsComponent } from "./landing-page/my-skills/my-skills.component";
import { WhyMeComponent } from "./landing-page/why-me/why-me.component";
import { AtfComponent } from "./landing-page/atf/atf.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CommonModule, ContactMeComponent, MyProjectsComponent, AboutMeComponent, MySkillsComponent, WhyMeComponent, AtfComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLegalNotice = false; 
}