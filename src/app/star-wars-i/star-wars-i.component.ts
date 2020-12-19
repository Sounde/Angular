import { Component, OnInit } from '@angular/core';
import { films } from '../Characteristics/films';
import { peoples } from '../Characteristics/peoples';
import { planets } from '../Characteristics/planets';
import { starships } from '../Characteristics/starships';
import { vehicles } from '../Characteristics/vehicles';
import { species } from '../Characteristics/species';
import { movieService} from '../services/movie.service';

@Component({
  selector: 'app-star-wars-i',
  templateUrl: './star-wars-i.component.html',
  styleUrls: ['./star-wars-i.component.css']
})
export class StarWarsIComponent {

  peoples: Array<peoples>;
  planets: Array<planets>;
  vehicles: Array<vehicles>;
  starships: Array<starships>;
  species: Array<species>;
  movie: films;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private movieService: movieService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPeoplesbyMovie('The Phantom Menace').subscribe((peoples: peoples[]) => {
      this.peoples = peoples;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllPlanetsbyMovie('The Phantom Menace').subscribe((planets: planets[]) => {
      this.planets = planets;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllSpeciesbyMovie('The Phantom Menace').subscribe((species: species[]) => {
      this.species = species;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllVehiculesbyMovie('The Phantom Menace').subscribe((vehicles: vehicles[]) => {
      this.vehicles = vehicles;
    });

    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getAllStarshipsbyMovie('The Phantom Menace').subscribe((starships: starships[]) => {
      this.starships = starships;
    });

    this.movieService.getmovieById('The Phantom Menace').subscribe((movie: films) => {
      this.movie = movie;
    });
  }
}
