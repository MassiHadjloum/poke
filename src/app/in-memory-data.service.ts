import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { POKEMONS } from "./pokemons/donnes-pokemon/mock-pokemon";

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let pokemons = POKEMONS
    return { pokemons }
  }

}
