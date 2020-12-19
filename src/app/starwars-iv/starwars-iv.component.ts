import { Component, OnInit } from '@angular/core';
import { films } from '../Characteristics/films';
import { peoples } from '../Characteristics/peoples';
import { planets } from '../Characteristics/planets';
import { species } from '../Characteristics/species';
import { starships } from '../Characteristics/starships';
import { vehicles } from '../Characteristics/vehicles';
import { movieService } from '../services/movie.service';

@Component({
  selector: 'app-starwars-iv',
  templateUrl: './starwars-iv.component.html',
  styleUrls: ['./starwars-iv.component.css']
})
export class StarwarsIVComponent {

  peoples: Array<peoples>;
  planets: Array<planets>;
  species: Array<species>;
  starships: Array<starships>;
  vehicles: Array<vehicles>;
  movie: films;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private movieService: movieService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPeoplesbyMovie('A New Hope').subscribe((peoples: peoples[]) => {
      this.peoples = peoples;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPlanetsbyMovie('A New Hope').subscribe((planets: planets[]) => {
      this.planets = planets;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllSpeciesbyMovie('A New Hope').subscribe((species: species[]) => {
      this.species = species;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllVehiculesbyMovie('A New Hope').subscribe((vehicles: vehicles[]) => {
      this.vehicles = vehicles;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllStarshipsbyMovie('A New Hope').subscribe((starships: starships[]) => {
      this.starships = starships;
    });

    this.movieService.getmovieById('A New Hope').subscribe((movie: films) => {
      this.movie = movie;
    });
  }


}
