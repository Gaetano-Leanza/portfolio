import { Component, Output, EventEmitter } from '@angular/core';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  @Output() backClicked = new EventEmitter<void>();
  
  goBack(): void {
    this.backClicked.emit(); 
  }
}