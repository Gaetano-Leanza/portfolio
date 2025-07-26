import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'legal-notice',
    loadComponent: () =>
      import('./landing-page/legal-notice/legal-notice.component').then((m) => m.LegalNoticeComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./landing-page/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
];
