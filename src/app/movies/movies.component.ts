import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  data: Array<any>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private movieService: movieService) {
    this.data = new Array<any>();
  }

  getDataMoviefromAPI(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getMovies().subscribe((data) => {
      this.data = data;
    });
  }

}

