import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { movieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  data: Array<any>;
  title: string;
  observable: Observable<any>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private movieService: movieService, private route: ActivatedRoute) {
    this.data = new Array<any>();
    // tslint:disable-next-line:no-unused-expression
    this.route.snapshot.params.title;
    this.observable = this.movieService.getMovies();
  }

  getDataMoviefromAPI(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getMovies().subscribe((data) => {
      this.data = data;
    });
  }

}

