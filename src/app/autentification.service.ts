import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {

  isLogged: boolean = false;
  redirect: string = "/"
  constructor(private router: Router) { }

  login(name: string, password: string): Observable<boolean> {
    const isIn = (name === "massi" && password === "massi")
    return of(isIn).pipe(
      delay(100),
      tap(isin => this.isLogged = isin))
   }

  logout() {
    this.isLogged = false;
    this.router.navigate(['autentification'])
  }
}
