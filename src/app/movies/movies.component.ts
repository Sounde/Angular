import { Component, OnInit } from '@angular/core';
import { films } from '../Characteristics/films';
import { movieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: films[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private movieService: movieService) {}

  ngOnInit(): void{
    this.movieService.getMovies().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.movies = result['name'];
  });
  }
}

