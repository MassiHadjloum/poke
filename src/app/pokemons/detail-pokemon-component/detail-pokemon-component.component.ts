import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from '../donnes-pokemon/pokemon';
import { PokemonsService } from '../pokemons.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-detail-pokemon-component',
  templateUrl: './detail-pokemon-component.component.html',
})
export class DetailPokemonComponentComponent implements OnInit {

  pokemons?: Pokemon[];
  pokemon: any;
  showDialog: boolean = false;

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    private service: PokemonsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id')
    id && this.service.getPokemonById(id!)
      .subscribe(
        pokemon => this.pokemon = pokemon
      )
  }

  goBack(): void {
    this.router.navigate(['/'])
  }

  editPokemon(): void {
    this.router.navigate(['/editpokemon', this.pokemon._id])
  }

  deletePokemon(value: boolean): void {
    value && this.service.deletePokemon(this.pokemon).subscribe(
      res => {
        this.toastr.success(`Pokemon ${this.pokemon.name} a bien était supprimer`);
        this.router.navigate(['pokemon/list'])
      })
  }

  handleShowDialog() {
    this.showDialog = true
  }

  cancelDeletion(value: boolean) {
    this.showDialog = value
  }
}
