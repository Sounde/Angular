import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { starships } from '../Characteristics/starships';


// tslint:disable-next-line: class-name
export class starshipsService {
  constructor(private http: HttpClient, ){
  }
  getStarships(): Observable<starships[]>{
    const url = 'https://swapi.dev/api/starships/';
    return this.http.get(url).pipe(map((data: starships) =>  data.results));
  }
}
