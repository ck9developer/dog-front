import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'walks',
    loadComponent: () => import('./pages/walks/walks.page').then( m => m.WalksPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'social',
    loadComponent: () => import('./pages/social/social.page').then( m => m.SocialPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'health',
    loadComponent: () => import('./pages/health/health.page').then( m => m.HealthPage)
  },
];
