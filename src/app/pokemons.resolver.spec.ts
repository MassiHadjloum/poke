import { TestBed } from '@angular/core/testing';

import { PokemonsResolver } from './pokemons.resolver';

describe('PokemonsResolver', () => {
  let resolver: PokemonsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
