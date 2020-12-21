import { Component, OnInit } from '@angular/core';
import { species } from '../Characteristics/species';
import { speciesService } from '../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent {

  data: Array<any>;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private speciesService: speciesService)
  {
    this.data = new Array<any>();
  }

  getDataSpeciesfromAPI(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.speciesService.getSpecies().subscribe((data) => {
      this.data = data;
    });
  }
}

