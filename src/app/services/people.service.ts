import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, mergeMap } from 'rxjs/operators/';
import { Observable } from 'rxjs';
import { peoples } from '../Characteristics/peoples';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService{

  constructor(private http: HttpClient){
  }
  getPeoples(): Observable<any> {
    let fin = 0;
    const url = 'https://swapi.dev/api/people/';
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


