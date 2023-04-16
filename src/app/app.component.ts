import { Component } from '@angular/core';
import { AutentificationService } from './autentification.service';
import { PokemonsService } from './pokemons/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pokemons';
  autentification?: AutentificationService
  constructor(private service: PokemonsService,
    private authService: AutentificationService
    ) {}

  ngOnInit(): void {
    this.autentification = this.authService;
    console.log(this.autentification.isLogged)
  }
  // search(value: string) {
  //   this.service.searchPokemon(value).subscribe(
  //     list => console.log(list)
  //   )
  // }
  logout() {
    this.authService.logout()

  }
}
