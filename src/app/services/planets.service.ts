import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { Observable } from 'rxjs';
import { planets } from '../Characteristics/planets';

export class PlanetsServices{

  constructor(private http: HttpClient){
  }

  getPlanets(): Observable<planets[]>{
    const url = 'https://swapi.dev/api/planets/';
    return this.http.get(url).pipe(map((data: planets) => data.results));
  }
}
