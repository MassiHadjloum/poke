import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../donnes-pokemon/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit {
  // pokemons!: Pokemon[];
  pokemon: any = null
  types: string[] = ['Terre', 'Lumiére', 'Feu', 'Poison', 'Vol', 'Plante']
  constructor(private router: Router, private activateRoute: ActivatedRoute,
    private service: PokemonsService) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id')
    this.service.getPokemonById(id!)
    .subscribe(
      pokemon => this.pokemon = pokemon
    )
  }

  goBack(): void {
    this.router.navigate(['/'])
  }
}
