import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { species } from '../Characteristics/species';


// tslint:disable-next-line: class-name
export class speciesService {
  constructor(private http: HttpClient, ){
  }
  getSpecies(): Observable<species[]>{
    const url = 'https://swapi.dev/api/species/';
    return this.http.get(url).pipe(map((data: species) => data.results));
  }
}
