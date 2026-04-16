import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Elkasha — Bespoke Web Apps & Cloud Solutions'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
    title: 'Services — Elkasha'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
    title: 'Portfolio — Elkasha'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),
    title: 'FAQ — Elkasha'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact — Elkasha'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
