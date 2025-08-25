import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'walks',
        loadComponent: () =>
          import('../pages/walks/walks.page').then((m) => m.WalksPage),
      },
      {
        path: 'social',
        loadComponent: () =>
          import('../pages/social/social.page').then((m) => m.SocialPage),
      },
      {
        path: 'health',
        loadComponent: () =>
          import('../pages/health/health.page').then((m) => m.HealthPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
