import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../global/auth.service';
import { Redirection, JsonWebToken } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { loginToken, loginRefreshToken } = route.queryParams;
    if (this.authService.isLoged.value) {
      const role = this.authService.user.role.name;
      role === 'candidate' ? Redirection.candidateDashboard() : Redirection.dashboard();
      return false;
    }
    return true;
  }

}
