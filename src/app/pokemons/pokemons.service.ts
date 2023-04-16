import { Injectable } from '@angular/core';
import { POKEMONS } from './donnes-pokemon/mock-pokemon';
import { Pokemon } from './donnes-pokemon/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap, find, map, takeLast, filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient,

  ) { }

  private pokemonUrl = 'https://pokemon-server-vh3d.onrender.com/api/pokemons'

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${error}, '\n', ${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(list => console.log(`fetched pokemons`)),
      catchError((err) => {
        console.log(err)
        return of([])
      })
    )
    // return POKEMONS
  }

  // le pipe async est un pipe capable de consomùer des Observables (ou promise) en appelant
  // implicitement la methode subscribe (ou then) afin de binder les valeurs
  // contenus dans l'observable (ou la promise)
  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${id}`)
      .pipe(
        tap(res => console.log(`fetched pokemons`, res)),
        catchError(this.handleError<Pokemon>(`getPokemonById`))
      )
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.patch<Pokemon>(`${this.pokemonUrl}/update/${pokemon._id}`, pokemon)
      .pipe(
        tap(poke => console.log('')),
        catchError((err) => {
          console.log(err)
          return of([])
        })
      )
  }

  deletePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.delete<Pokemon>(`${this.pokemonUrl}/delete/${pokemon._id}`)
    .pipe(
      tap(poke => console.log("delete pokemon")),
      catchError((err) => {
        console.log(err)
        return of([])
      })
    )
  }

  addPokemon(pokemon:Pokemon) : Observable<any> {
    return this.http.post(`${this.pokemonUrl}/add`, pokemon)
    .pipe(
      tap(pok => console.log(pok)),
      catchError((err) => {
        console.log(err)
        return of()
      })
    )
  }

  searchPokemon(search: string): Observable<Pokemon[]> {
    return this.getPokemons().pipe(
      map(pokemon => pokemon.filter(p =>
        p.name?.toLowerCase()?.includes(search.toLowerCase()))
      ),
    )
  }

  sortPokemonsListByParams(pokemons: Pokemon[], selectedOption: string): Pokemon[] {
    switch (selectedOption) {
      case 'name':
        return pokemons!.sort((a, b) =>
          b.name!.localeCompare(a.name!)
        )
      case 'rarete':
        return pokemons!.sort((a, b) =>
          b.rarete!.length - a.rarete!.length
        )
      default:
        return pokemons!.sort((a, b) =>
          new Date(b.created).getTime() - new Date(a.created).getTime()
        )
    }
  }

  getPokemonTypes(): string[] {
    return ['Terre', 'Lumiére', 'Feu', 'Poison', 'Vol', 'Plante', 'Normal', 'Insecte'];
  }
}
