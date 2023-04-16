import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../donnes-pokemon/pokemon";
import { POKEMONS } from "../donnes-pokemon/mock-pokemon";
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'list-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [DatePipe]
})

export class PokemonsComponent implements OnInit {
  pokemons?: Pokemon[];
  selectedOption: string = "";
  options = [
    { value: 'name', label: 'Nom' },
    { value: 'created', label: 'Date de Création' },
    { value: 'rarete', label: 'Rareté' },
    { value: 'hp', label: 'Points de vie' },
    { value: 'cp', label: 'Dégât' }
  ];

  constructor(private router: Router, private service: PokemonsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.pokemons = POKEMONS
    this.service.getPokemons().subscribe(
      data => this.pokemons = data.sort((a, b) =>
        new Date(b.created).getTime() - new Date(a.created).getTime()
      )
    )
  }

  search(value: string) {
    this.service.getPokemons().subscribe(
      list => this.pokemons = list.filter(p =>
        p.name?.toLowerCase()?.includes(value.toLowerCase())
        || p.types.includes(value) || p.rarete?.toLowerCase
          ().includes(value.toLowerCase())
      ).sort((a, b) =>
        new Date(b.created).getTime() - new Date(a.created).getTime()
      )
    )
  }

  makeRarete(rarete: string): string {
    return rarete.split('').map(e => '✩').join('')
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon._id]
    this.router.navigate(link)
  }

  addPokemon(): void {
    this.router.navigate(['pokemon/add'])
  }

  sortWithSelect() {
    this.service.sortPokemonsListByParams(this.pokemons!, this.selectedOption!)
  }
}
