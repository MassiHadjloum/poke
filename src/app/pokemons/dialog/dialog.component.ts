import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() showDialog?: boolean;
  @Output() cancelDeletion = new EventEmitter<boolean>();
  @Output() deletePokemonEmitter = new EventEmitter<boolean>();

  constructor() {}

  cancelDelete() {
    this.cancelDeletion.emit(false)
  }

  deletePokemon() {
    this.deletePokemonEmitter.emit(true)
  }

  openDialog() {

  }
}
