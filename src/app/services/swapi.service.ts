import {Observable} from 'rxjs';


export interface Swapi{

  getmovieById(): Observable<any>;
  getAllStarshipsbyMovie(): Observable<any[]>;
  getAllVehiculesbyMovie(): Observable<any[]>;
  getAllSpeciesbyMovie(): Observable<any[]>;
  getAllPeoplesbyMovie(): Observable<any[]>;
  getAllPlanetsbyMovie(): Observable<any[]>;

}
