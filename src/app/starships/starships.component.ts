import { Component, OnInit } from '@angular/core';
import { starships } from '../Characteristics/starships';
import { starshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit  {
  [x: string]: any;

  starships: starships[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private starshipsService: starshipsService)
  {
  }

  ngOnInit(): void{
    this.starshipsService.getStarships().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.starships = result['name'];
    });
  }
}

