import { Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { LegalNoticeComponent } from './landing-page/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];
