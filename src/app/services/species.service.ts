import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { concatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<any> {
    let fin = 0;
    const url = 'https://swapi.dev/api/species/';
    const NbElementParPage = 10;
    return this.http.get(url).pipe(mergeMap( data => {
      // tslint:disable-next-line:no-string-literal
      fin = data['count'];
      fin = Math.floor( fin / NbElementParPage) - 1;
      return range(1, fin).pipe(
          concatMap( numPage => this.http.get(url + '?page=' + numPage))
        );
    }));
  }
}
