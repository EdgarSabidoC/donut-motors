import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
  try {
    let isLoggedIn = false;
    isLoggedIn = await this.authService.checkLoggedIn();
    if (isLoggedIn) {
      return true; // El usuario está autenticado y puede acceder a la ruta
    } else {
      this.router.navigate(['/login']);
      return false; // El usuario no está autenticado, se redirige a la página de inicio de sesión
    }
  } catch (error) {
    console.error(error);
    return false; // En caso de error, se considera que el usuario no está autenticado
  }
}
}
