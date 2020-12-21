import { Component } from '@angular/core';
import { PlanetsService } from '../services/planets.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {

  listPlanet: Array<any>;
  constructor(private planetServices: PlanetsService) {
    this.listPlanet = new Array();
    this.planetServices.getPlanets().subscribe(
      (data: any) => {​​​​​​​
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.listPlanet = this.listPlanet.concat(data['results']);
      }​​​​​​​,
      (err) => {​​​​​​​
        console.log('err');
      }​​​​​​​
    );
  }
}
