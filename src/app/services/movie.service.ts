import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { films} from '../Characteristics/films';


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class movieService {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, ) {
  }
  getMovies(): Observable<films[]>{
    const url = 'https://swapi.dev/api/films/';
    return this.http.get(url).pipe(map((data: films) => data.results));
  }
}
