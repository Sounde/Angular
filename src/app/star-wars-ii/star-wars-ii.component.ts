import { Component, OnInit } from '@angular/core';
import { films } from '../Characteristics/films';
import { peoples } from '../Characteristics/peoples';
import { planets } from '../Characteristics/planets';
import { starships } from '../Characteristics/starships';
import { vehicles } from '../Characteristics/vehicles';
import { species } from '../Characteristics/species';
import { movieService} from '../services/movie.service';

@Component({
  selector: 'app-star-wars-ii',
  templateUrl: './star-wars-ii.component.html',
  styleUrls: ['./star-wars-ii.component.css']
})
export class StarWarsIIComponent  {

  peoples: Array<peoples>;
  planets: Array<planets>;
  vehicles: Array<vehicles>;
  starships: Array<starships>;
  species: Array<species>;
  movie: films;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private movieService: movieService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPeoplesbyMovie('The Attack of the Clones').subscribe((peoples: peoples[]) => {
      this.peoples = peoples;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPlanetsbyMovie('The Attack of the Clones').subscribe((planets: planets[]) => {
      this.planets = planets;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllSpeciesbyMovie('The Attack of the Clones').subscribe((species: species[]) => {
      this.species = species;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllVehiculesbyMovie('The Attack of the Clones').subscribe((vehicles: vehicles[]) => {
      this.vehicles = vehicles;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllStarshipsbyMovie('The Attack of the Clones').subscribe((starships: starships[]) => {
      this.starships = starships;
    });

    this.movieService.getmovieById('The Attack of the Clones').subscribe((movie: films) => {
      this.movie = movie;
    });
   }

}
