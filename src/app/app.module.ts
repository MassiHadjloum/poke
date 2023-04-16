import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemomnRoutingModule } from './pokemons/pokemons-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service';
import { AutentificationComponent } from './autentification/autentification.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AutentificationComponent,
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
