import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificationGuard } from './autentification.guard';
import { AutentificationComponent } from './autentification/autentification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: '', redirectTo: 'pokemon/list', pathMatch: 'full'},
  {path: 'autentification', component: AutentificationComponent},
  {path: '**', component: PageNotFoundComponent, canActivate: [AutentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
