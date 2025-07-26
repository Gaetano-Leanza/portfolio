import { Component, Output, EventEmitter } from '@angular/core';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-privat-policy',
  standalone: true,

  imports: [TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  @Output() backClicked = new EventEmitter<void>();
  
  goBack(): void {
    this.backClicked.emit(); 
  }
}