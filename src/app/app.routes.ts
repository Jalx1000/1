import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'business',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/business/components/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/business/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/business/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('./pages/business/tables/tables.component').then(
            (m) => m.TablesComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/business/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
    ],
  },
  {
    path: 'crm',
    // // canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/crm/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/crm/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'profile',
        redirectTo: '/business/profile',
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('./pages/business/tables/tables.component').then(
            (m) => m.TablesComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    // canActivate: [authGuard],
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component'),
  },
];
