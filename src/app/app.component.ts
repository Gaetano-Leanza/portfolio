import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from './landing-page/atf/atf.component'; 
import { WhyMeComponent } from './landing-page/why-me/why-me.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtfComponent, WhyMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
