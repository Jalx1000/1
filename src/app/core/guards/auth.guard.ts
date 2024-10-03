import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isAuth() || undefined) {
    localStorage.removeItem('user');
    return router.createUrlTree(['/login']);
  }
  return router.createUrlTree(['/business/dashboard']);
};
