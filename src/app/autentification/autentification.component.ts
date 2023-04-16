import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificationService } from '../autentification.service';

@Component({
  selector: 'app-autentification',
  templateUrl: './autentification.component.html',
})
export class AutentificationComponent {
  name: string = "";
  password: string = "";
  autentification: any;

  constructor(
    private authService: AutentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.autentification = this.authService;
  }

  login() {
    this.authService.login(this.name, this.password).subscribe(
      loged => loged ? this.router.navigate(['/pokemon/list'])
      : this.router.navigate(['/autentification'])
    )
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['autentification'])
  }
}
