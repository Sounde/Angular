import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { vehicles } from '../Characteristics/vehicles';


// tslint:disable-next-line: class-name
export class vehiclesService {
  constructor(private http: HttpClient, ){
  }
  getVehicles(): Observable<vehicles[]>{
    const url = 'https://swapi.dev/api/vehicles/';
    return this.http.get(url).pipe(map((data: vehicles) => data.results));
  }
}
