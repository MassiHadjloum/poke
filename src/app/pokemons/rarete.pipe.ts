import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raretePokemon'
})
export class RaretePipe implements PipeTransform {

  transform(rarete: string): string {
    const colors = ['deep-purple darken',
      'cyan darken', 'teal darken', 'light-blue accent', 'deep-orange lighten',
      'red darken']
    return `chip ${colors[rarete.length - 1]}-${rarete.length}`;
  }

}
