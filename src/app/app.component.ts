import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from './landing-page/atf/atf.component'; 
import { WhyMeComponent } from './landing-page/why-me/why-me.component';
import { MySkillsComponent } from "./landing-page/my-skills/my-skills.component";
import { MyProjectsComponent } from './landing-page/my-projects/my-projects.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtfComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
