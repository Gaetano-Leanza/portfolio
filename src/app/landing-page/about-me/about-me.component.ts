import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,                           // HINZUGEFÜGT
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']   // KORRIGIERT
})
export class AboutMeComponent { }
