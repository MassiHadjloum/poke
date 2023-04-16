import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificationGuard } from '../autentification.guard';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonsComponent } from './list-pokemon/pokemon.component';

const routeePokemons: Routes = [
  {path: 'pokemon', children: [
    {path: 'list', component: PokemonsComponent, canActivate: [AutentificationGuard]},
    {path: 'add', component: AddPokemonComponent, canActivate: [AutentificationGuard]},
    {path: ':id', component: DetailPokemonComponentComponent, canActivate: [AutentificationGuard]},
  ]},
  {path: 'editpokemon/:id', component: EditPokemonComponent, canActivate: [AutentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routeePokemons)],
  exports: [RouterModule]
})
export class PokemomnRoutingModule { }
