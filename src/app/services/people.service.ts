import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { Observable } from 'rxjs';
import { peoples } from '../Characteristics/peoples';

@Injectable({
  providedIn: 'root'
})
export class PeopleService{

  constructor(private http: HttpClient){

  }

  getPeoples(): Observable<peoples[]>{
    const url = 'https://swapi.dev/api/people/';
    return this.http.get(url).pipe(map((data: peoples) => data.results));
  }
}
