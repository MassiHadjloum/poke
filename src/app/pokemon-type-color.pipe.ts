import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = 'red ligthen-1'
        break;
      case 'Eau':
        color = 'blue ligthen-1'
        break;
      case 'Plante':
        color = 'green ligthen-1'
        break;
      case 'Obscurité':
        color = 'brown ligthen-1'
        break;
      case 'Normal':
        color = 'grey ligthen-1'
        break;
      case 'Terre':
        color = 'cyan ligthen-1'
        break;
      case 'Poison':
        color = 'deep-purpel ligthen-1'
        break;
      case 'Lumiére':
        color = 'deep-purpel ligthen-1'
        break;
      default:
        color = 'grey'
        break

    }
    return 'chip ' + color;
  }

}
