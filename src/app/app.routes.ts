import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'DevConsult — Bespoke Web Apps & Cloud Solutions'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
    title: 'Services — DevConsult'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
    title: 'Portfolio — DevConsult'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),
    title: 'FAQ — DevConsult'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact — DevConsult'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
