import { Component } from '@angular/core';
import { AtfComponent } from '../atf/atf.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AtfComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
