import { Component, OnInit } from '@angular/core';
import { PlanetsServices } from '../services/planets.service';
import { planets } from '../Characteristics/planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: planets[];
  constructor(private PlanetService: PlanetsServices) {
  }

  ngOnInit(): void{
    this.PlanetService.getPlanets().subscribe((result: any) => {
      // tslint:disable-next-line: no-string-literal
      this.planets = result['name'];
   });
  }

}
