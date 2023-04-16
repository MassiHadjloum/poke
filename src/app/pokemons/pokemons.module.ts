import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list-pokemon/pokemon.component';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './editPokemon/form-pokemon/form-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonsService } from './pokemons.service';
import { PokemomnRoutingModule } from './pokemons-routing.module';
import { RaretePipe } from './rarete.pipe';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DetailPokemonComponentComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    RaretePipe,
    AddPokemonComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    PokemomnRoutingModule,
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
