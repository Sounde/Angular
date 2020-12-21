import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent  {

  listStarships: Array<any>;
  constructor(private starshipsService: StarshipsService) {
    this.listStarships = new Array();
    this.starshipsService.getStarships().subscribe(
    (data: any) => {​​​​​​​
    console.log(data);
      // tslint:disable-next-line:no-string-literal
    this.listStarships = this.listStarships.concat(data['results']);
      }​​​​​​​,
      (err) => {​​​​​​​
        console.log('err');
      }​​​​​​);
   }

}
