import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificationService } from './autentification.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificationGuard implements CanActivate {
  constructor(private service: AutentificationService, private router: Router) {}

  canActivate() {
    if(this.service.isLogged) {
      return true
    }

    this.router.navigate(['/autentification'])
    return true;

  }

}
