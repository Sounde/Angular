import { Component, OnInit } from '@angular/core';
import { films } from '../Characteristics/films';
import { peoples } from '../Characteristics/peoples';
import { planets } from '../Characteristics/planets';
import { species } from '../Characteristics/species';
import { starships } from '../Characteristics/starships';
import { vehicles } from '../Characteristics/vehicles';
import { movieService } from '../services/movie.service';

@Component({
  selector: 'app-starwars-iii',
  templateUrl: './starwars-iii.component.html',
  styleUrls: ['./starwars-iii.component.css']
})
export class StarwarsIIIComponent {

  peoples: Array<peoples>;
  planets: Array<planets>;
  species: Array<species>;
  starships: Array<starships>;
  vehicles: Array<vehicles>;
  movie: films;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private movieService: movieService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPeoplesbyMovie('Revenge of the Sith').subscribe((peoples: peoples[]) => {
      this.peoples = peoples;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPlanetsbyMovie('Revenge of the Sith').subscribe((planets: planets[]) => {
      this.planets = planets;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllSpeciesbyMovie('Revenge of the Sith').subscribe((species: species[]) => {
      this.species = species;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllVehiculesbyMovie('Revenge of the Sith').subscribe((vehicles: vehicles[]) => {
      this.vehicles = vehicles;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllStarshipsbyMovie('Revenge of the Sith').subscribe((starships: starships[]) => {
      this.starships = starships;
    });

    this.movieService.getmovieById('Revenge of the Sith').subscribe((movie: films) => {
      this.movie = movie;
    });
  }


}

