import { Component, OnInit } from '@angular/core';
import { starships } from '../Characteristics/starships';
import { starshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  data: Array<any>;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private starshipsService: starshipsService)
  {
    this.data = new Array<any>();
  }

  getDataStarshipsfromAPI(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.starshipsService.getStarships().subscribe((data) => {
      this.data = data;
    });
  }

}
