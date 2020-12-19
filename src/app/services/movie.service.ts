import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { HttpClient } from '@angular/common/http';
import { Swapi } from './swapi.service';
import { films } from '../Characteristics/films';
import {starships} from '../Characteristics/starships';
import {vehicles} from '../Characteristics/vehicles';
import {Observable} from 'rxjs';
import { species } from '../Characteristics/species';
import { peoples } from '../Characteristics/peoples';
import {planets} from '../Characteristics/planets';


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class movieService implements Swapi {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private films: films) {
  }
  getmovieById(): Observable<films> {
    return this.querymovie(`${this.films.url}films/${this.films.title}`);
  }
  getAllStarshipsbyMovie(): Observable<starships[]> {
    return this.querystarships(`${this.films.url}films/${this.films.title}/starships`);
  }
  getAllVehiculesbyMovie(): Observable<vehicles[]> {
    return this.queryvehicules(`${this.films.url}films/${this.films.title}/vehicles`);
  }
  getAllSpeciesbyMovie(): Observable<species[]> {
    return this.queryspecies(`${this.films.url}films/${this.films.title}/species`);
  }
  getAllPeoplesbyMovie(): Observable<peoples[]> {
    return this.querypeople(`${this.films.url}films/${this.films.title}/people`);
  }
  getAllPlanetsbyMovie(): Observable<planets[]> {
    return this.queryplanets(`${this.films.url}films/${this.films.title}/planets`);
  }

  private querymovie(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as films[];
    }));
  }

  private querystarships(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as starships[];
    }));
  }

  private queryplanets(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as planets[];
    }));
  }

  private querypeople(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as peoples[];
    }));
  }

  private queryspecies(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as starships[];
    }));
  }

  private queryvehicules(url: string): Observable<any>{
    return this.http.get(url).pipe(map((response: any) => {
      return response.json() as starships[];
    }));
  }
}
