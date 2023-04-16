import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PokemonsService } from '../../pokemons.service';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
})
export class FormPokemonComponent implements OnInit {
  @Input() pokemon: any
  @Input() isAddMode: boolean = false;
  types: any = []

  constructor(private router: Router,
    private service: PokemonsService,
    private toastr: ToastrService,
    ) { }


  ngOnInit(): void {
    this.types = this.service.getPokemonTypes();
  }

  hasType(type: string): boolean {
    return this.pokemon!.types.includes(type)
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length === 1 && this.hasType(type))
     return false
    if(this.pokemon.types.length >= 3 && !this.hasType(type))
     return false
     return true
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked
    checked ? this.pokemon.types.push(type) :
      this.pokemon.types.splice(this.pokemon.types.indexOf(type), 1)
  }

  onSubmit($event: any) {
    !this.isAddMode ?
    this.service.updatePokemon(this.pokemon).subscribe(_ => {
      this.toastr.success(`Pokemon ${this.pokemon.name} est à jour`);
      this.router.navigate(['/pokemon', this.pokemon._id])
    })
    : this.service.addPokemon(this.pokemon).subscribe(_ => {
      this.toastr.success(`Pokemon ${this.pokemon.name} a bien était ajouter`);
      this.router.navigate(['/pokemon/list'])
    })
  }

  goBack():void {
    this.router.navigate(['/pokemon', this.pokemon._id])
  }


}
